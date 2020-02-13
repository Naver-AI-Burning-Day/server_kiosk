const express = require('express');
const router = express.Router();

const NaverChatbot = require('../NaverChatbot/index');
const { Menu, Order, Count } = require('../models');

router.post('/', async (req, res, next) => {
    let config = {
        CHATBOT_USER_ID: 'asdasdsadsd',
        CHATBOT_TOKEN: 'Y0dJV3JabnBCblh4bm5wcnpQRkdndXFadHpvbWRBcUU=',
        CHATBOT_URL: 'https://19vwdrsfxg.apigw.ntruss.com/send/beta/',
    }
    const chatbot = new NaverChatbot(config);

    let data = await chatbot.answerText(req.body.text);
    
    const name = await find(data, req);
    console.log(name);

    /*if()*/
    const sendData = await Order.findAll({
        where: {
            user_id: req.body.id,
        },
    });

    let returnJson = {};
    
    
    const test = await Menu.findOne({ where: { id: sendData[0].dataValues.menu_id }});
    console.log(test.dataValues.name);
    
    console.log(sendData.length);
    let tmp;

    for(let i = 0; i<sendData.length; i++){
        console.log("NOW!");
        tmp = await Menu.findOne({ where: { id: sendData[i].dataValues.menu_id }});
        returnJson["menu" + i] = tmp.dataValues.name;
        returnJson["count" + i] = sendData[i].dataValues.menu_count;
        returnJson["price" + i] = tmp.dataValues.price * sendData[i].dataValues.menu_count;
    }

    console.log(returnJson);
    return res.json(JSON.parse(JSON.stringify(returnJson)));
});

const makeComplete = async (sendData) =>{
    
}

const find = async (data, req) => {
    if(data.entities.length == 0){
        await Order.create({
            user_id: req.body.id,
            menu_id: 1,
            menu_count: 1
        });

        return 1;
    }
    else if(data.entities.length == 2){
        const menu = await Menu.findOne({ where: { name:  data.entities[0].word } });
        const count = await Count.findOne({ where: { name: data.entities[1].word } });
        
        console.log(count);
        await Order.create({
            user_id: req.body.id,
            menu_id: menu.id,
            menu_count: count.int
        });

        return 2;
    }
    else if(data.entities.length == 4){
        const menu1 = await Menu.findOne({ where: { name:  data.entities[0].word } });
        const count1 = await Count.findOne({ where: { name: data.entities[1].word } });
        
        await Order.create({
            user_id: req.body.id,
            menu_id: menu1.id,
            menu_count: count1.int
        });

        const menu2 = await Menu.findOne({ where: { name:  data.entities[2].word } });
        const count2 = await Count.findOne({ where: { name: data.entities[3].word } });
        
        await Order.create({
            user_id: req.body.id,
            menu_id: menu2.id,
            menu_count: count2.int
        });

        return 3;
    }
}

module.exports = router;
