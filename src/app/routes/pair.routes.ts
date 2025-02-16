import { Router } from 'express';
import { addPair, getPairs } from '../controllers/pairs.controller';

const router = Router();

router.get('/listPairs/:groupId', getPairs);
router.post('/addPair', addPair);

export default router;
