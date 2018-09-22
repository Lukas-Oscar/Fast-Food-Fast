import dotenv from 'dotenv';

dotenv.config();

export default {
  secretKey: process.env.SECRET_KEY,
  test: {
    dbTestUrl: process.env.DB_TEST_URL,
  },
  development: {
    dbUrl: process.env.DB_URL,
  },
};
