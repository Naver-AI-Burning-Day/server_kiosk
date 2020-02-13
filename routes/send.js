const express = require('express');
const router = express.Router();

const NaverChatbot = require('../NaverChatbot/index');

router.post('/', async (req, res, next) => {
    let config = {
        CHATBOT_USER_ID: 'asdasdsadsd',
        CHATBOT_TOKEN: 'Y0dJV3JabnBCblh4bm5wcnpQRkdndXFadHpvbWRBcUU=',
        CHATBOT_URL: 'https://19vwdrsfxg.apigw.ntruss.com/send/beta/',
    }
    const chatbot = new NaverChatbot(config);
    console.log(req.body.text);
    let data = await chatbot.answerText(req.body.text);

    console.log(data);

    return res.json(JSON.parse(JSON.stringify(data)));
});

module.exports = router;
