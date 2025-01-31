import dotenv from 'dotenv';
import { RedisOptions } from 'ioredis';

export type Config = {
  stage: string;
  project: string;
  redis: RedisOptions;
};

export function getConfig() {
  dotenv.config();

  const REDIS_CONFIG: RedisOptions = {
    db: parseInt(readEnv('REDIS_DB')),
    host: readEnv('REDIS_HOST'),
    port: parseInt(readEnv('REDIS_PORT')),
    password: readEnv('REDIS_PASSWORD'),
    tls: {},
  };

  const config: Config = {
    stage: readEnv('STAGE'),
    project: readEnv('PROJECT'),
    redis: REDIS_CONFIG,
  };
  return config;
}

function readEnv(name: string) {
  const env = process.env[name];
  if (!env) throw new Error(`Invalid config. Failed to read ${name} from env`);
  return env;
}
