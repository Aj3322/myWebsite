const express = require('express');
const router = new express.Router();
const MenRanking = require('../models/DataModel');

router.get('/api/',async (req, res) => {
    // res.send('Hello')
    try{
    const data = await MenRanking.find();
    if(!data){
        return res.status(404).json({msg: 'No Data Found'});
        }else{
            res.status(200).send(data)
        }
    }catch(err){
        console.log(err);
    }
});
router.get('/api/:id',async (req, res) => {
    // res.send(req.params.id);
    try{
    const data = await MenRanking.find({_id: req.params.id});
    if(!data){
        return res.status(404).json({msg: 'No Data Found'});
        }else{
            res.status(200).send(data)
        }
    }catch(err){
        console.log(err);
    }
});

router.post('/api/', async (req, res) => {

    // res.send(req.body);
    try {
        const menranking = new MenRanking(req.body);
        const data =await menranking.save();
        if (!data) {
            return res.status(400).send({ msg: 'Error creating men ranking' });
        } else {
            res.status(201).send({ menranking: data });
        }
        
    } catch (err) {
        console.log(err.message);
    }
});

router.put('/api/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        let data = await MenRanking.findOneAndUpdate(_id, req.body,{new:true});
        if (!data) {
            return res.status(404).send({ msg: "No post found" });
        } else {
            res.status(200).send({ msg: "Post updated!" , data: data });
        }

    } catch (err) {
        console.error(err.message);
    }
});

router.patch('/api/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        let data = await MenRanking.findByIdAndUpdate(_id, req.body, {new:true});
        if (!data) {
            return res.status(404).send({ msg: "No posts found" });
        } else {
            res.send({ msg: "Posts Updated!",data })
        }
    } catch (err) {
        console.error(err.message);
    }
})

router.delete('/api/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        let data = await MenRanking.findByIdAndDelete(_id);
        if (!data) {
            return res.status(404).send({ msg: "no data found with that id to delete" })
        } else {
            res.send({ msg: 'deleted successfully' })
        }
    } catch (err) {
        console.error(err.message);
    }
});





module.exports = router;
