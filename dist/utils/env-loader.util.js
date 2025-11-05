import dotenv from 'dotenv'; // Environment variables configuration
dotenv.config();
const env = {
    PORT: process.env.PORT,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_LIFE_LIMIT: process.env.ACCESS_TOKEN_LIFE_LIMIT,
    REFRESH_TOKEN_LIFE_LIMIT: process.env.REFRESH_TOKEN_LIFE_LIMIT,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    cloudinary_cloud_name: process.env.cloudinary_cloud_name,
    cloudinary_api_key: process.env.cloudinary_api_key,
    cloudinary_api_secret: process.env.cloudinary_api_secret,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,
    REDIS_URL: process.env.REDIS_URL
};
export default env;
//# sourceMappingURL=env-loader.util.js.map