import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = Router();

// Register (client or freelancer)
// Register (client or freelancer)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role = 'client', profile } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already used' });

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      passwordHash,
      role,
      profile, // Save profile from frontend
    });

    res.json({
      message: 'Registration successful',
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        profile: user.profile,
      },
    });
  } catch (e) {
    res.status(500).json({ message: 'Register failed', error: e.message });
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, role: user.role, name: user.name, id: user._id });
  } catch (e) {
    res.status(500).json({ message: 'Login failed', error: e.message });
  }
});

export default router;
