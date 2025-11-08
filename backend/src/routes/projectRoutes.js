import { Router } from 'express';
import Project from '../models/Project.js';

const router = Router();

// Client: post project
router.post('/', async (req, res) => {
  const { title, description, budget, deadline, clientId } = req.body;
  const p = await Project.create({ title, description, budget, deadline, client: clientId });
  res.json(p);
});

// Get projects (optionally by clientId or freelancerId)
router.get('/', async (req, res) => {
  const { clientId, freelancerId, status } = req.query;
  const q = {};
  if (clientId) q.client = clientId;
  if (freelancerId) q.freelancer = freelancerId;
  if (status) q.status = status;
  const list = await Project.find(q).populate('client freelancer', 'name role');
  res.json(list);
});

// Admin: mark project status
router.patch('/:id/status', async (req, res) => {
  const { status } = req.body; // 'in-progress' | 'completed' | 'cancelled'
  const p = await Project.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(p);
});

export default router;
