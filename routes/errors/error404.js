const express = require('express'),
     router = express.Router()
     erro404 = require('../../controllers/errors/error404');

router.get('*', erro404.errors404);

module.exports = router;