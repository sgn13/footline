import * as dotenv from 'dotenv';
import { IConfiguration } from 'types/configuration';

dotenv.config();

const ROOT = process.cwd();
let path: string;

type NodeEnvType = 'development' | 'staging' | 'production' | 'testing' | 'test';

const processEnvironment = process.env.NODE_ENV as NodeEnvType;

switch (processEnvironment) {
  case 'production':
    path = `${ROOT}/.env/production.env`;
    break;
  case 'staging':
    path = `${ROOT}/.env/staging.env`;
    break;
  case 'testing':
    path = `${ROOT}/.env/testing.env`;
    break;
  default:
    path = `${ROOT}/.env/development.env`;
}

dotenv.config({ path });

const {
  NODE_ENV = 'development',
  API_PORT,
  API_HOST,
  API_URL,
  API_PREFIX,

  APP_PORT,
  APP_HOST,
  APP_URL,
  APP_NAME,
  APP_DESCRIPTION,
  APP_MAIN_URL,
} = process.env;

const isProduction = processEnvironment === 'production';
const isStaging = processEnvironment === 'staging';
const isTesting = processEnvironment === 'testing';
const isDevelopment = processEnvironment === 'development';

export const configuration: IConfiguration = {
  root: ROOT,
  env: {
    name: NODE_ENV || '',
    isDevelopment,
    isStaging,
    isTesting,
    isProduction,
  },
  api: {
    port: Number(API_PORT),
    host: API_HOST,
    preFix: API_PREFIX,
    url: API_URL,
  },
  app: {
    port: Number(APP_PORT),
    host: APP_HOST,
    url: APP_URL,
    name: APP_NAME,
    description: APP_DESCRIPTION,
    mainUrl: APP_MAIN_URL,
  },
};

export default configuration;
