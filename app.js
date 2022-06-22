const express = require('express');
const morgan = require('morgan');
const app = express();
const giftExchangeRouter = require("./routes/gift-exchange")
 



app.use(morgan("tiny"));
app.use(express.json());
app.use("/gift-exchange",giftExchangeRouter)
app.get('/',(req,res) => {
    res.status(200).json ({ "ping": "pong" });
});



module.exports = app; 