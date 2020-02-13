var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/first',require('./first'));
router.use('/send',require('./send'));
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
module.exports = router;
