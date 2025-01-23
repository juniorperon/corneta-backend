import { Router } from 'express';
import { registerPairs, getPairs } from '../controllers/pairs.controller';

const router = Router();

router.post('/registerPairs', registerPairs);
router.get('/getPairs', getPairs);

export default router;
