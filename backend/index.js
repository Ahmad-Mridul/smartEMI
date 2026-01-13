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


app.get("/admins", async (req, res) => {
    const admins = await prisma.admin.findMany({
        include: {
            user: true
        }
    });
    res.json(admins);
})

app.post("/admins", async (req, res) => {
    const admin = req.body;
    console.log(admin);
    const hashedPassword = await bcrypt.hash(admin.password, 10);
    admin.password = hashedPassword;
    // admin.createdAt = new Date();
    const { email, ...adminData } = admin;
    const result = await prisma.admin.create({
        data: {
            ...adminData,
            user: {
                create: {
                    email: email,
                    password: admin.password,
                    role: "admin"
                }
            }
        }
    });
    res.json(result);
})
// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
