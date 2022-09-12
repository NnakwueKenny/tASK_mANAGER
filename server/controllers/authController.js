const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
    let {username, password} = req.body;
    User.findOne({$or: [{email:username}, {phone:username}]})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.json(
                        {error: err}
                    )
                }
                if (result) {
                    let accessToken = jwt.sign(
                        {email: user.email},
                        process.env.accessToken,
                        {expiresIn: '7d'}
                    );
                    res.json(
                        {
                            message: 'Login Successful',
                            accessToken: accessToken
                        }
                    )
                    user.accessToken = accessToken;
                    console.log(user);
                    user.save()
                } else {
                    res.json(
                        {
                            message: 'Password does not match!'
                        }
                    )
                }
            })
        } else {
            res.json(
                {message: 'No user matched the provided details!'}
            )
        }
    })
}

module.exports = {
    login
}