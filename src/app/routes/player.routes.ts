import { Router } from 'express';
import {
  getPlayers,
  addPlayer,
  addPointsToPlayer
} from '../controllers/player.controller';

const router = Router();

router.get('/listPlayers/:groupId', getPlayers);
router.post('/addPlayer', addPlayer);
router.post('/addPointsToPlayer', addPointsToPlayer);

export default router;
