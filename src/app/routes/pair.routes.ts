import { Router } from 'express';
import { addPair, verifyPair, getPairs } from '../controllers/pairs.controller';

const router = Router();

router.get('/listPairs/:groupId', getPairs);
router.post('/verifyPair', verifyPair);
router.post('/addPair', addPair);

export default router;
