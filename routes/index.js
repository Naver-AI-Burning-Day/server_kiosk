var express = require('express');
var router = express.Router();

const NaverChatbot = require('../module/OpenChat');

router.post('/', async (req, res, next) => {
    let config = {
        CHATBOT_USER_ID: 'intotheunknown',
        CHATBOT_TOKEN: 'Y0dJV3JabnBCblh4bm5wcnpQRkdndXFadHpvbWRBcUU=',
        CHATBOT_URL: 'https://19vwdrsfxg.apigw.ntruss.com/send/beta/',
    }
    const chatbot = new NaverChatbot(config);
    let data = await chatbot.answerText(req.body.text);
    console.log(data);

  });

module.exports = router;
