const express = require('express') //express has routing system
const router = express.Router()
const {Post}= require("../models");

router.get("/", async(req, res) => {   //the arguments are the standard arguments needed for makimg request. req = request and res= response
    const listOfPosts= await Post.findAll() //whenever using a sequelize function, make the get/post function async
res.json(listOfPosts);
});

router.post("/",async(req,res)=>{   //inserting data into the database
const post=req.body; //passing data from the body to the post
await Post.create(post); //inserting to the table with the help of Post function 
res.json(post); //for visual representation
});
module.exports = router
