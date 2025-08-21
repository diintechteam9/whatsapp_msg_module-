const express=require('express');
const router=express.Router();
const {sendWhatsAppMessage,getMessageStatus}=require('../controller/whatsappmsgcontroller');


router.post('/send-message',sendWhatsAppMessage);

module.exports=router;