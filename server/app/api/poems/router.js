const express = require('express');
const router = express.Router();

const { Poem, PoemValidator } = require('./model');

router.get('/', (req, res, next) => {
    console.log('Fetch all poems!');
    res.send(true);
});
router.post('/', async (req, res, next) => {
    // const error = PoemValidator(req.body);
    // console.log('error =', error.description);
    res.end();
    const poem = new Poem({
        title: req.body.title,
        description: req.body.description
    });
    try{
        await poem.save();
        res.send(poem);
    }catch(err){
        console.log('POST : POEMS Error', err);
        res.status(400).send('Not able to add to DB!');
    }
});

router.get('/:id', (req, res, next) => {
    console.log('Access a specific poem');
    res.send(true);
});
router.patch('/:id', (req, res, next) => {
    console.log('Edit a specific poem');
    res.send(true);
});

module.exports = router;