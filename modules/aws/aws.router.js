var express = require('express');
var router = express.Router();
const { getAwsMessage } = require('./aws.service');

router.get('/message', (req, res, next) => {
  const data = getAwsMessage();
  console.log(new Date().toISOString(), 'get aws message');
  res.json({ data });
});

module.exports = router;
