export interface IConfiguration {
  root: string;
  env: {
    name: string;
    isDevelopment: boolean;
    isStaging: boolean;
    isTesting: boolean;
    isProduction: boolean;
  };
  api: { port: number; host: string; preFix: string; url: string };
  app: {
    port: number;
    host: string;
    url: string;
    name: string;
    description: string;
    mainUrl: string;
  };
}
