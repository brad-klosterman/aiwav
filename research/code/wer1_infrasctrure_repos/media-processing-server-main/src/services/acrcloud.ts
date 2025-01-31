import * as fs from 'fs';
import * as crypto from 'crypto';
import FormData from 'form-data';
import axios from 'axios';
import { logger } from '../boilerplate/createLogger';
import { ACRCloudResponse } from '../types/acr-cloud-response';

function buildStringToSign(
  method: string,
  uri: string,
  accessKey: string,
  dataType: string,
  signatureVersion: number,
  timestamp: number,
): string {
  return [method, uri, accessKey, dataType, signatureVersion, timestamp].join('\n');
}

function getOptions() {
  const method = 'POST';
  const dataType = 'fingerprint';
  const signatureVersion = 1;
  const host = process.env.ACRCLOUD_API_HOST || '';
  const endpoint = process.env.ACRCLOUD_API_IDENTIFY_ENDPOINT || '';
  const accessKey = process.env.ACRCLOUD_ACCESS_KEY || '';
  const accessSecret = process.env.ACRCLOUD_ACCESS_SECRET || '';
  return { method, endpoint, accessKey, dataType, signatureVersion, accessSecret, host };
}

export async function identifyFingerprints(filePaths: string[]): Promise<ACRCloudResponse[]> {
  logger.debug({ message: 'Fingerprint analysis started.', path: filePaths[0] });
  // TODO: Could need some request rate-limiting here
  const promises = filePaths.map((filePath, index) => identifyFingerprint(filePath, index));
  return Promise.all(promises);
}

async function identifyFingerprint(filePath: string, offset: number): Promise<ACRCloudResponse> {
  const { method, endpoint, accessKey, dataType, signatureVersion, accessSecret, host } = getOptions();

  const fingerprintExtension = '.cli.lo';
  const data = await fs.promises.readFile(filePath + fingerprintExtension);
  const timestamp = Math.floor(Date.now() / 1000);

  const stringToSign = buildStringToSign(method, endpoint, accessKey, dataType, signatureVersion, timestamp);
  const signature = crypto.createHmac('sha1', accessSecret).update(stringToSign, 'utf-8').digest().toString('base64');

  const form = new FormData();
  form.append('sample', data);
  form.append('sample_bytes', data.length);
  form.append('access_key', accessKey);
  form.append('data_type', dataType);
  form.append('signature_version', signatureVersion);
  form.append('signature', signature);
  form.append('timestamp', timestamp);

  const requestOptions = {
    method,
    headers: form.getHeaders(),
    data: form,
  };

  const response = await axios(`${host}${endpoint}`, requestOptions);
  const body = response.data;

  return { file: filePath, offset, result: body };
}
