import { Request, Response, Router } from "express";
import GroupService from '../services/group.service';

const groupRouter = Router();

groupRouter.get('/', async (_req: Request, res: Response): Promise<any> => {
  try {
    const groups = await GroupService.getAllGroups();
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar grupos' });
  }
});

groupRouter.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const { name } = req.body;
    const newGroup = await GroupService.createGroup(name);
    return res.status(201).json(newGroup);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

export default groupRouter;
