const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            mongoose.connect('mongodb+srv://matweqer:Dilda123@cluster0.wuics.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
            console.log(`server was started on port ${PORT}`);
        })
    } catch (e) {
        console.error(e);
    }
}

start();
