import Redis from 'ioredis';

import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from '../config/Redis';

export default new Redis({
  port: REDIS_PORT,
  host: REDIS_HOST,
  password: REDIS_PASSWORD,
});
