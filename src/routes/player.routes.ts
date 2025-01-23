import { Router } from 'express';
import {
  getPlayers,
} from '../controllers/player.controller';

const router = Router();

router.get('/listPlayers', getPlayers);

export default router;
