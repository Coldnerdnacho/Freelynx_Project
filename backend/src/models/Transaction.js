import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    status: { type: String, enum: ['held', 'released', 'refunded'], default: 'held' }
  },
  { timestamps: true }
);

export default mongoose.model('Transaction', transactionSchema);
