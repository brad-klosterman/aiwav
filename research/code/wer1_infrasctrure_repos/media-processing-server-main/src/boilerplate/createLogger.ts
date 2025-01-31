import pino from 'pino';
import { Config, getConfig } from './config';

export function createLogger(config: Config) {
  const logger = pino({
    level: 'debug',
    base: {
      service: config.project,
      env: config.stage,
    },
    transport: {
      target: 'pino-pretty',
    },
  });

  return logger;
}

export const logger = createLogger(getConfig());
