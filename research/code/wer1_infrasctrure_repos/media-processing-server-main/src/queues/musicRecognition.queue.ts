import { Queue, Worker } from 'bullmq';
import { logger } from '../boilerplate/createLogger';
import { Context } from '../boilerplate/context';
import { Queues } from '../utils/queues';
import downloadAndProcessAudio from './musicRecognition.worker';
import { getConfig } from '../boilerplate/config';
import { Jobs } from '../utils/jobs';

import { fetchFingerprintsByFileKey } from '../services/wer1-graph';

export interface IdentifyJobData {
  fileKey: string;
}

const REDIS_CONFIG = getConfig().redis;
const musicRecognitionQueue = new Queue(Queues.MUSIC_RECOGNITION, { connection: REDIS_CONFIG });
const worker = new Worker(Queues.MUSIC_RECOGNITION, downloadAndProcessAudio, {
  connection: REDIS_CONFIG,
  concurrency: 5,
});

worker.on('completed', job => {
  logger.info({ message: 'Job completed!', job });
});

worker.on('failed', (job, err) => {
  logger.error({ message: 'Job failed!', job, error: err });
});

const checkMediaProcessingState = async (data: IdentifyJobData) => {
  const jobs = await musicRecognitionQueue.getJobs(['active', 'waiting']);

  const fileAlreadyProcessing = jobs.some(job => job.data.fileKey === data.fileKey);

  return fileAlreadyProcessing;
};

const identifyAudio = async (ctx: Context) => {
  const data: IdentifyJobData = ctx.request.body;
  const { fileKey } = data;

  if (!fileKey) {
    ctx.status = 400;
    ctx.body = { error: 'Missing fileKey' };

    return;
  }

  const fileAlreadyProcessing = await checkMediaProcessingState(data);
  if (fileAlreadyProcessing) return (ctx.response.body = { message: `File already in processing.` });

  musicRecognitionQueue.add(Jobs.IDENTIFY, data, { attempts: 3 });

  ctx.response.body = { message: `File with fileKey ${fileKey} sent to processing.` };

  return ctx;
};

const getMediaProcessingStatus = async (ctx: Context) => {
  const fileKey = ctx?.query?.fileKey as string;

  const fileAlreadyProcessing = await checkMediaProcessingState({
    fileKey,
  });

  if (fileAlreadyProcessing) {
    ctx.response.body = {
      isProcessing: fileAlreadyProcessing,
      fileKey,
      message: `File already in processing.`,
    };

    return ctx;
  } else {
    const fingerprints = await fetchFingerprintsByFileKey(fileKey);
    ctx.response.body = {
      isProcessing: fileAlreadyProcessing,
      fileKey,
      fingerprints,
    };

    return ctx;
  }
};

export { musicRecognitionQueue, identifyAudio, getMediaProcessingStatus };

// TODO
// https://docs.bullmq.io/guide/going-to-production/
