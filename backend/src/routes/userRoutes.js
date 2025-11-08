import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

// Admin: list users (filter by role optionally ?role=freelancer)
router.get('/', async (req, res) => {
  const filter = {};
  if (req.query.role) filter.role = req.query.role;
  const users = await User.find(filter).select('-passwordHash');
  res.json(users);
});

// Admin: verify toggle
router.patch('/:id/verify', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  user.verified = !user.verified;
  await user.save();
  res.json({ verified: user.verified });
});

// Admin: promote to mentor
router.patch('/:id/promote', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { role: 'mentor' }, { new: true });
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json({ id: user._id, role: user.role });
});

export default router;
