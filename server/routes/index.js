const express = require('express'),
      router = express.Router()
      index = require('../controllers/index');

router.get('/', index.index);
// router.get('/', index.layout);
module.exports = router;
