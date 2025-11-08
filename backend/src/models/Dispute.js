import mongoose from 'mongoose';

const disputeSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    raisedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    against: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    issue: String,
    amount: Number,
    status: { type: String, enum: ['open', 'resolved'], default: 'open' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    resolution: String
  },
  { timestamps: true }
);

export default mongoose.model('Dispute', disputeSchema);
