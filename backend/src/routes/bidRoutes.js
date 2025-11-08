import { Router } from 'express';
import Bid from '../models/Bid.js';

const router = Router();

router.post('/', async (req, res) => {
  const { projectId, freelancerId, amount, note } = req.body;
  const bid = await Bid.create({ project: projectId, freelancer: freelancerId, amount, note });
  res.json(bid);
});

router.get('/', async (req, res) => {
  const { projectId, freelancerId } = req.query;
  const q = {};
  if (projectId) q.project = projectId;
  if (freelancerId) q.freelancer = freelancerId;
  const list = await Bid.find(q).populate('project freelancer', 'title name');
  res.json(list);
});

// Client/Admin: accept a bid
router.patch('/:id/accept', async (req, res) => {
  const bid = await Bid.findByIdAndUpdate(req.params.id, { status: 'accepted' }, { new: true });
  res.json(bid);
});

export default router;
