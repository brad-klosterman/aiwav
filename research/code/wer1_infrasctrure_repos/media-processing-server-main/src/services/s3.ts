import fs, { createWriteStream } from 'fs';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';
import { logger } from '../boilerplate/createLogger';
import { fromSSO } from '@aws-sdk/credential-providers';

export async function downloadFileFromS3(fileKey: string, tempFolderPath: string, bucket: string): Promise<void> {
  // TODO: Fix profile, should be dynamic
  const client = new S3Client({
    region: process.env.DJLAND_BUCKET_REGION,
    credentials: fromSSO({ profile: 'wer1-dev' }),
  });

  const tempFilePath = path.join(tempFolderPath, fileKey);

  if (fs.existsSync(tempFilePath)) {
    logger.debug({ message: 'File is present in path. Skipping download.', tempFilePath });
    return;
  }
  if (!fs.existsSync(tempFolderPath)) {
    fs.mkdirSync(tempFolderPath);
  }

  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: fileKey,
    });

    const response = await client.send(command);

    if (response.Body) {
      logger.debug({ message: 'File download started.', fileKey });
      const writeStream = createWriteStream(tempFilePath);

      let totalBytes = 0;
      let transferredBytes = 0;
      let progressThreshold = 10;

      if (response.ContentLength) {
        totalBytes = parseInt(String(response.ContentLength), 10);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const responseBody: any = response.Body;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      responseBody.on('data', (chunk: any) => {
        transferredBytes += chunk.length;
        const progress = (transferredBytes / totalBytes) * 100;

        if (progress >= progressThreshold) {
          logger.debug(`Progress: ${progress.toFixed(2)}%`);
          progressThreshold += 10;
        }
      });

      responseBody.pipe(writeStream);

      await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });

      logger.debug({ message: 'File downloaded and saved successfully', fileKey });
    } else {
      throw new Error(`Failed to download the file ${fileKey} from bucket ${bucket}`);
    }
  } catch (error) {
    logger.error({ message: 'Error:', error });
    throw new Error('Internal Server Error');
  }
}
