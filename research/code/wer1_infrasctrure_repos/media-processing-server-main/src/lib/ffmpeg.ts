import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { logger } from '../boilerplate/createLogger';
import { glob } from 'glob';

export async function segmentAudioFile(filePath: string): Promise<string[]> {
  const segmentOutputPath = path.dirname(filePath);
  const segmentOutputFileName = path.parse(filePath).name + '-segment';
  const segmentOutputFileExtension = path.parse(filePath).ext;
  const filePattern = `${segmentOutputPath}/${segmentOutputFileName}_*${segmentOutputFileExtension}`;

  await clearSegments(filePattern);

  return new Promise((resolve, reject) => {
    exec(
      `ffmpeg -i ${filePath} -f segment -segment_time 10 -c copy ${segmentOutputPath}/${segmentOutputFileName}_%04d${segmentOutputFileExtension}`,
      async error => {
        if (error) {
          logger.error({ message: 'Error segmenting audio:', error });
          reject(error);
        } else {
          logger.debug({ message: 'Audio segmented successfully', segmentOutputFileName });

          const segments = await glob(filePattern);
          if (segments) {
            const finalSegments = await filterTinySegments(segments);
            resolve(finalSegments.reverse());
          } else {
            logger.debug({ message: 'Error reading segmented files', segmentOutputFileName });
            reject();
          }
        }
      },
    );
  });
}
async function clearSegments(filePattern: string) {
  const presentFiles = await glob(filePattern);
  if (presentFiles) {
    logger.debug({ message: 'Previous segments present in path. Removing...', filePattern });
    for (const file of presentFiles) {
      fs.unlinkSync(file);
    }
  }
}

async function filterTinySegments(segments: string[]) {
  const filteredSegments = await Promise.all(
    segments.map(async segment => {
      return new Promise<string | undefined>((resolve, reject) => {
        exec(`ffprobe -i ${segment} -show_entries format=duration -v quiet -of csv="p=0"`, (error, stdout, stderr) => {
          if (error) {
            logger.error({ message: 'Error', error });
            reject(error);
          }
          if (stderr) {
            logger.error({ message: 'Error', stderr });
            reject(stderr);
          }
          if (stdout) {
            parseFloat(stdout) > 1 ? resolve(segment) : resolve(undefined);
          }
        });
      });
    }),
  );

  return filteredSegments.filter(segment => segment !== undefined) as string[];
}
