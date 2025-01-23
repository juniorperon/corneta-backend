import { Router } from 'express';
import {
  getPlays,
  addPlay
} from '../controllers/play.controller';

const router = Router();

router.get('/listPlays', getPlays);
router.post('/addPlay', addPlay);

export default router;
