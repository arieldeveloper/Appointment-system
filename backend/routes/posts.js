// File contains every route after /posts/...
const express = require('express');
const router = express.Router();

//import model
const Post = require('../models/Post.js');

//Routes (/posts already in path)
router.get('/', async (req, res) => {
    try {
        // show posts on screen
        const posts = await Post.find().limit(10);  // mongoose function
        res.json(posts);
    } catch (error){
        res.json({message: error}) // return error
    }
});

router.get('/about', (req, res) => {
    res.send('we are posts about page');
});

router.post('/', async (req, res) => {

    const post = new Post({
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });

    }
    // post.save()
    //
    //     .then(data => {
    //         res.json(data);
    //      })
    // .catch(error => {
    //     res.json({message: "didnt work" })
    // });
});


// Get a specific post
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (error) {
        res.json({message:error});
    }

});

// Delete a post
router.delete('/:postID', async (req, res) => {
    try {
        const postRemoval = await Post.remove({_id: req.params.postID });
        res.json(postRemoval);

    } catch (error) {
        res.json({message:error});
    }

});


//update a post
router.patch('/:postID', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postID},
            {$set: {description: req.body.description}});
        res.json(updatePost);
    } catch (error) {
        res.json({message:error});
    }


    }
);


module.exports = router;
