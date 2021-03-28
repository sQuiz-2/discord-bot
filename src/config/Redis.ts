const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'password';

export { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD };
