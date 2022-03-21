const express = require('express');
const app = express();
//1 and 2 are STANDARD LINES 
app.use(express.json());
const db = require("./models");

//routers

const postRouter = require('./routes/posts'); //importing a router. postRouter is the name of the router

app.use("/posts", postRouter); //applying a router. Now we can make requests in  the posts.js

db.sequelize.sync()
    .then(() => {
        app.listen(3002, () => {
            console.log("Server is running on port 3002");
        });

    });
