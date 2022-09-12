const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
    const {firstname, lastname, email, phone, password, confirmpassword} = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            res.json({
                error: err
            })
        }

        if (confirmpassword === password) {
            let user = new User({
                firstname: firstname.toLowerCase(),
                lastname: lastname.toLowerCase(),
                email: email,
                phone: phone,
                password: hashedPassword,
                tasks: []
            });

            user.save()
            .then(user => {
                res.json({
                    message: `User account for ${firstname} ${lastname} successfully created!`
                })
            })
            .catch(err => {
                res.json({
                    err,
                    meesage: 'Oops, an error has occured!'
                })
            })
        } else {
            res.json(
                {message: 'Passwords do not match!'}
            )
        }
    })
}

module.exports = {
    register
}