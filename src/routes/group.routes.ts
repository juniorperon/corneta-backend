import { Router } from 'express';
import {
  getGroups,
  addGroup
} from '../controllers/group.controller';

const router = Router();

router.get('/listGroups', getGroups);
router.post('/addGroup', addGroup);

export default router;
