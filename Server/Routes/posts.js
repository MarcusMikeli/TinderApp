// VI SKAL IGEN REQUIRE EXPRESS
const express = require('express');
// WE CAN NOW CALL ROUTER AND CALL IT AS A FUNCTION
// WE CAN THEN CREATE OUR OWN ROUTES IN SEPERATE FILES AND IMPORT IT INTO THE MAIN .JS FILE
const router = express.Router();

// WE IMPORT THE MODEL WE WANT TO POST TO
const Post = require('../Models/Post');

// YOU NOW HAVE THE ABILITY TO CREATE ROUTES
//ROUTES - 'GET' MEANS THAT SHOOTS US BACK A MESSAGE. IF WE WOULD WANT TO SEND A MESSAGE LIKE A 
// LOGIN FORM, THEN WE WOULD USE 'POST'. IF WE HAVE A POST LIST AND WANT TO DELETE A POST, WE CAN USE 'DELETE.
// WE WOULD USE PATCH FOR UPDATING
// '/' IS THE ROUTE WE WANT TO GO TO

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

// WE HAVE TO ACCESS THE INFORMATION, THE THING THAT WE'RE POSTING TO OUR API
// FROM THE BODY, SO request.body

// SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
    const savedPost =  await post.save()
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    };
});

// SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
    }catch(err){
        res.json({message: err});
    }
});

// DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
     const removedPost = await Post.remove({_id: req.params.postId})
     res.json(removedPost)
    } catch(err) {
        res.json({message: err});
    }
});

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
    const updatedPost = await Post.updateOne({_id: req.params.postId}, 
        {$set: {title: req.body.title}});
        res.json(updatedPost);

    } catch(err) {
        res.json({message: err});
    }
})

// WE SET THIS EQUAL TO ROUTER SO THAT WE EXPORT THE WHOLE ROUTER
module.exports = router;