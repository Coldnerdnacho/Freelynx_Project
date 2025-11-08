import mongoose from 'mongoose';

const bidSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    note: String,
    status: { type: String, enum: ['submitted', 'accepted', 'rejected'], default: 'submitted' }
  },
  { timestamps: true }
);

export default mongoose.model('Bid', bidSchema);
