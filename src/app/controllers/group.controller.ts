import GroupService from '../services/group.service';
import { Request, Response } from 'express';

const groupService = new GroupService();

export const getGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const groups = await groupService.getAllGroups();
    res.status(200).json({ data: groups });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar grupos.' });
  }
};

export const addGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== "string" || !name.trim()) {
      res.status(400).json({ message: "O nome do grupo é obrigatório e deve ser uma string válida." });
      return;
    }

    const newGroup = await groupService.addGroup(name);
    res.status(200).json({ data: newGroup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar grupos.' });
  }
};

