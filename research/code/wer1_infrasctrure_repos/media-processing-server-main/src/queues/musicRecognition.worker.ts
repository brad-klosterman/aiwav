import path from 'path';
import { logger } from '../boilerplate/createLogger';
import { IdentifyJobData } from './musicRecognition.queue';
import { Job } from 'bullmq';
import os from 'os';
import { downloadFileFromS3 } from '../services/s3';
import { segmentAudioFile } from '../lib/ffmpeg';
import { generateFingerprints } from '../lib/fingerprint-generator';
import { identifyFingerprints } from '../services/acrcloud';
import { parseACRCloudResponse } from '../pure-functions/parseACRCloudResponse';
import { saveFingerprints } from '../services/wer1-graph';

const downloadAndProcessAudio = async (job: Job) => {
  const data: IdentifyJobData = job.data;
  const bucket = process.env.DJLAND_BUCKET || '';
  const fileKey = data.fileKey as string;
  const tempFolderPath = path.join(os.tmpdir(), 'downloads');
  const filePath = path.join(tempFolderPath, fileKey);

  try {
    logger.info({ message: 'Job started', job: job.id, fileKey });
    await downloadFileFromS3(fileKey, tempFolderPath, bucket);
    const segments = await segmentAudioFile(filePath);
    await generateFingerprints(segments);
    const results = await identifyFingerprints(segments);
    const parsedResults = parseACRCloudResponse(results);
    await saveFingerprints(parsedResults, fileKey);

    // TODO: Send a callback request to the a callback URL to notify that the file processing is complete.
  } catch (error) {
    const errorMessage = 'Error processing file';
    logger.error({ message: errorMessage, error });
    throw new Error(errorMessage);
  }
};

export default downloadAndProcessAudio;
