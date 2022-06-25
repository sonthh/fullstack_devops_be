const express = require('express');
const cors = require('cors');

const awsRouter = require('./modules/aws/aws.router');
const { port } = require('./modules/config/app.config');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/aws', awsRouter);
app.listen(port);
console.log(`Server is running on port ${port}`);

module.exports = app;
