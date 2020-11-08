require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORS_ORIGIN_DEV: process.env.CORS_ORIGIN_DEV || 'http://localhost:3000',
  CORS_ORIGIN_PROD: process.env.CORS_ORIGIN_PROD,
};
