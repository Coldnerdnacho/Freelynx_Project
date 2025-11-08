import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    budget: Number,
    deadline: Date,
    status: { type: String, enum: ['open', 'in-progress', 'completed', 'cancelled'], default: 'open' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
