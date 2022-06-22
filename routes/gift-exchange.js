const express = require('express');
const router = express.Router();
const GiftExchange = require("../models/gift-exchange")




router.post('/pairs',(req,res) =>{
const names = req.body.names

res.status(200).json()
})

router.post('/traditional',(req,res) =>{
    const names = req.body.names

res.status(200).json(pairs)
})



module.exports = router;