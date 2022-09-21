const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    console.log('Request Body:', req.body);
    const {email, username, password, confirmPassword} = req.body;
    console.log(email, username, password, confirmPassword);
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            res.json({
                error: err
            })
        }

        if (confirmPassword === password) {
            let user = new User({
                email: email,
                username: username,
                password: hashedPassword,
                tasks: []
            });

            user.save()
            .then((user) => res.json( {
                    message: `User account for ${user.email} has been created successfully!`
                })
            )
            .catch(err => {
                return {
                    err,
                    message: 'Oops, an error has occured!'
                }
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