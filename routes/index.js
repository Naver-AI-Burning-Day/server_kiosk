var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
  return res.json({"state": "ok"});
});

module.exports = router;
