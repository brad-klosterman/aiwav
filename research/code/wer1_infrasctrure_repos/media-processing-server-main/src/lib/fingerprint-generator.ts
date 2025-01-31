import { logger } from '../boilerplate/createLogger';
import { spawn } from 'child_process';
import fs from 'fs';

export async function generateFingerprints(filePaths: string[]): Promise<void[]> {
  clearFingerprints(filePaths);
  logger.debug({ message: 'Audio fingerprinting started.', path: filePaths[0] });
  const promises = filePaths.map(filePath => generateFingerprint(filePath));
  return Promise.all(promises);
}

function clearFingerprints(filePaths: string[]) {
  const fingerprintExtension = '.cli.lo';
  if (fs.existsSync(filePaths[0] + fingerprintExtension)) {
    logger.debug({ message: 'Previous fingerprints present in path. Removing.', path: filePaths[0] });
    for (const file of filePaths) {
      fs.unlinkSync(file + fingerprintExtension);
    }
  }
}

async function generateFingerprint(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const binaryPath = process.cwd() + '/bin/acrcloud_extr_linux_arm64_alpine';
    const options = ['-i', filePath, '-cli'];

    const child = spawn(binaryPath, options);

    child.stderr.on('data', data => {
      logger.error({ message: 'ACRCloud binary error', data });
    });

    child.on('close', code => {
      if (code === 0) {
        child.stdin.end();
        resolve();
      } else {
        const errorMessage = `Fingerprint generation failed with code ${code}`;
        reject(errorMessage);
      }
    });
  });
}
