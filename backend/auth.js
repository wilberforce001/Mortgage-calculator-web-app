import express from 'express';
import bcrypt from 'bcrypt';
import pool from './db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Insert user into database
        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
            [email, hashedPassword]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'User registration failed' });
    };
});

// Login route 
router.post('/login', async (req,res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1', 
            [email]);
        const user = result.rows[0];

        // If user not found or password is incorrect
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Successful login
        res.json({ token, message: 'Login successful', userId: user.id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
