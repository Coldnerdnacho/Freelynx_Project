import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './db.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import bidRoutes from './routes/bidRoutes.js';
import disputeRoutes from './routes/disputeRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Freelynx API running'));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/disputes', disputeRoutes);

const port = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI)
  .then(() => app.listen(port, () => console.log(`🚀 API on http://localhost:${port}`)))
  .catch((e) => {
    console.error('DB error', e);
    process.exit(1);
  });
