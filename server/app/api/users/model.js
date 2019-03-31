const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    age: {
        type: Number,
        validate: {
            validator: function(){
                return (this.age >= 18 && this.age <=60);
            },
            message: 'Invalid age.'
        }
    },
});
const User = mongoose.model('User', userSchema);


exports.User = User;