import { createClient } from "redis";

const redisClient = createClient();
await redisClient.connect();

await redisClient.hIncrBy("userHash", "counter", 10);


await redisClient.quit();
