const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Register route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to database
    const admin = await prisma.admin.create({
        data: { email, password: hashedPassword },
    });

    res.json({ success: true, admin });
});


app.get('/admins', async (req, res) => {
    try {
        const admins = await prisma.admin.findMany(); // fetch all admins
        console.log(admins);
        res.json({ success: true, admins });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch admins" });
    }
});

// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
