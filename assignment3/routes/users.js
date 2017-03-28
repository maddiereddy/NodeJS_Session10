var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I do not have the users list implemented yet!');
});

module.exports = router;
