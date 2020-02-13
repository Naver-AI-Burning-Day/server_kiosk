var express = require('express');
var router = express.Router();
var {user} = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
    user.create({name:'temp'}).then(result=>{
        console.log(result);
    })

});
module.exports = router;
