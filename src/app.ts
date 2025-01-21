// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pairsRoutes from './routes/pairs.routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/pairs', pairsRoutes);

export default app;
