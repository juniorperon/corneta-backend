import { Router } from 'express';
import { addPair, getPairByPlayerId, getPairs } from '../controllers/pairs.controller';

const router = Router();

router.get('/listPairs', getPairs);
router.get('/listPairByPlayerId', getPairByPlayerId);
router.post('/addPair', addPair);

export default router;
