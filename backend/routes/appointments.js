// File contains every route after /appointments/...
const express = require('express');
const router = express.Router();

//import model
const Appointment = require('../models/Appointment.js');

//Routes (/posts already in path)
router.get('/', async (req, res) => {
    try {
        // show posts on screen
        const apppointments = await Appointment.find();  // mongoose function
        res.json(apppointments); // shows on screen
    } catch (error){
        res.json({message: error}) // return error
    }
});

router.post('/', async (req, res) => {

    const appointment = new Appointment({
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        hour: req.body.hour,
        minute: req.body.minute,
        user: req.body.user,
    });

    try {
        const savedAppointment = await appointment.save();
        res.json(savedAppointment);
    } catch (error) {
        res.json({ message: error });

    }
});


// // Get a specific post
// router.get('/:postID', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.postID);
//         res.json(post);
//     } catch (error) {
//         res.json({message:error});
//     }
//
// });
//
// // Delete a post
// router.delete('/:postID', async (req, res) => {
//     try {
//         const postRemoval = await Post.remove({_id: req.params.postID });
//         res.json(postRemoval);
//
//     } catch (error) {
//         res.json({message:error});
//     }
//
// });
//
//
// //update a post
// router.patch('/:postID', async (req, res) => {
//         try {
//             const updatePost = await Post.updateOne({_id: req.params.postID},
//                 {$set: {description: req.body.description}});
//             res.json(updatePost);
//         } catch (error) {
//             res.json({message:error});
//         }
//
//
//     }
// );
//

module.exports = router;
