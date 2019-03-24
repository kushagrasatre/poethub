const mongoose = require('mongoose');
const Joi = require('joi');

const poemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 1300
    },
    media: {
        type: String
    }
});
const Poem = mongoose.model('Poem', poemSchema);

const validation = (body) => {
    const schema = {
        title: Joi.string().required().min(5).max(50),
        description: Joi.string().required().max(1300),
    };
    return Joi.validate(body, schema);
};

exports.Poem = Poem;
exports.PoemValidator = validation;