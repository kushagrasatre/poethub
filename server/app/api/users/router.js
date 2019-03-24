const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Fetch all users!');
    res.send(true);
});
router.post('/', (req, res, next) => {
    console.log('Create a new user based on body content!');
    res.send(true);
});

router.get('/:id', (req, res, next) => {
    console.log('Access a specific user with', req.params.id);
    res.send(true);
});
router.patch('/:id', (req, res, next) => {
    console.log('Edit a specific user');
    res.send(true);
});

module.exports = router;