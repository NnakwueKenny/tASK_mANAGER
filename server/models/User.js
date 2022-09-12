const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        password: {
            type: String
        },
        confirmpassword: {
            type: String
        },
        tasks: {
            type: Object
        },
        accessToken: {
            type: String
        },
    },
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);
module.exports = User;