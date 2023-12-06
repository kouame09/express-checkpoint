const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Page des services');
});

module.exports = router;
