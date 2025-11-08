import { Router } from 'express';
import Dispute from '../models/Dispute.js';

const router = Router();

// Raise dispute
router.post('/', async (req, res) => {
  const { projectId, raisedBy, against, issue, amount, priority } = req.body;
  const d = await Dispute.create({ project: projectId, raisedBy, against, issue, amount, priority });
  res.json(d);
});

// List disputes (admin view; filter by status optional)
router.get('/', async (req, res) => {
  const q = {};
  if (req.query.status) q.status = req.query.status;
  const list = await Dispute.find(q)
    .populate('project', 'title')
    .populate('raisedBy against', 'name role');
  res.json(list);
});

// Resolve dispute (simple)
router.patch('/:id/resolve', async (req, res) => {
  const { resolution } = req.body;
  const d = await Dispute.findByIdAndUpdate(
    req.params.id,
    { status: 'resolved', resolution },
    { new: true }
  );
  res.json(d);
});

export default router;
