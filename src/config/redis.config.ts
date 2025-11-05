// config/redis.js
import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL!,
});
console.log(redisClient);
redisClient.on("error", (err) => console.error("Redis Client Error", err));

await redisClient.connect();

export { redisClient };

