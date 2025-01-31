import { Context as KoaContext } from 'koa';
import { Config } from './config';
import pino from 'pino';

export interface Context extends KoaContext {
  logger: pino.Logger;
  config: Config;
}
