import { Request, Response, Router } from "express";
import Group from "../entities/Group";
import GroupRepository from '../repositories/GroupRepository';
import IGroup from "../interfaces/IGroup";

const groupRouter = Router();
groupRouter.get('/', async (_req: Request, res: Response): Promise<any> => {
  const groups = await GroupRepository.getGroups();
  return res.status(200).json(groups);
});

groupRouter.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "O campo 'name' é obrigatório." });
    }

    const newGroup = await GroupRepository.createGroup({ name });
    return res.status(201).json(newGroup);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao criar o grupo" });
  }
});

export default groupRouter;

// const groupService = new GroupService();

// /**
//  * Retorna todos os grupos do banco de dados.
//  */
// export const getGroups = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const groups = await groupService.getGroups();
//     res.status(200).json({ data: groups });
//   } catch (error) {
//     console.error("Erro ao buscar grupos:", error);
//     res.status(500).json({ message: "Erro ao buscar grupos." });
//   }
// };

// /**
//  * Adiciona um novo grupo ao banco de dados.
//  */
// export const addGroup = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name } = req.body;

//     if (!name || typeof name !== "string" || !name.trim()) {
//       res.status(400).json({ message: "O nome do grupo é obrigatório e deve ser uma string válida." });
//       return;
//     }

//     const newGroup = await groupService.addGroup(name);
//     res.status(201).json({ data: newGroup });
//   } catch (error) {
//     console.error("Erro ao criar grupo:", error);
//     res.status(500).json({ message: "Erro ao criar o grupo." });
//   }
// };
