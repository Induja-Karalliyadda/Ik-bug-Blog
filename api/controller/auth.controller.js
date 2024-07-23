import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import { json } from 'express';

// Signup function
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    console.log('Signup request body:', req.body); // Debugging statement

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    const hashPassword = bcryptjs.hashSync(password, 10); // encryption code

    const newUser = new User({
        username,
        email,
        password: hashPassword
    });

    try {
        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        next(error);
    }
};

// Signin function
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    console.log('Signin request body:', req.body); // Debugging statement

    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        console.log('Valid user:', validUser); // Debugging statement

        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        console.log('Valid password:', validPassword); // Debugging statement

        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }

        const token = jwt.sign(
            { id: validUser._id }, process.env.JWT_SECRET
        );

        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest);
    } catch (error) {
        next(error);
    }
};