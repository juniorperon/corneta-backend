import { Router } from 'express';
import { addPair, getPairByPlayerId, getPairs } from '../controllers/pairs.controller';

const router = Router();

router.get('/listPairs/:groupId', getPairs);
router.get('/listPairByPlayerId/:groupId', getPairByPlayerId);
router.post('/addPair', addPair);

export default router;
