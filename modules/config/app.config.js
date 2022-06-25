const dotenv = require('dotenv');
dotenv.config();

const awsScretKey = process.env.AWS_SECRET_ACCESS_KEY;
const port = process.env.PORT || 4000;

module.exports = {
  awsScretKey,
  port,
};
