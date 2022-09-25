const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    console.log('Request Body:', req.body);
    const {email, username, password, confirmPassword} = req.body;
    // console.log('SPLITTED PASSWORD', password.split(' ').join('').length);
    console.log(email, username, password, confirmPassword);

    UserModel.findOne({
        email: email
    }, (err, userExists) => {
        if (err) {
            return res.status(422).send(err);
        }
        if (userExists) {
            console.log('User already exists.')
            return res.status(422).send({
                error: 'User already exists.'
            });
        } else {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    res.json({
                        error: err
                    })
                }
                
                if (confirmPassword === password) {
                    //  && (password !== '' || confirmPassword !== '')
                    const user = new UserModel({
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
                            error: 'Oops, an error has occured!'
                        }
                    })
                } else {
                    // if (password === '' || confirmPassword === '') 
                    let noPassword, noConfirmPassword;

                    res.json(
                        {passwordMismatch: 'Passwords do not match!'}
                    )
                }
            });
        }
    });
}

module.exports = {
    register
}