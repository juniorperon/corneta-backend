import { Router } from 'express';
import {
  getPlayers,
  addPlayer
} from '../controllers/player.controller';

const router = Router();

router.get('/listPlayers/:groupId', getPlayers);
router.post('/addPlayer', addPlayer);

export default router;
