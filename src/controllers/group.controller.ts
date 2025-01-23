// src/controllers/group.controller.ts
import { Request, Response } from "express";
import { GroupService } from "../services/group.service";

const groupService = new GroupService();

/**
 * Retorna todos os grupos do banco de dados.
 */
export const getGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const groups = await groupService.getGroups();
    res.status(200).json({ data: groups });
  } catch (error) {
    console.error("Erro ao buscar grupos:", error);
    res.status(500).json({ message: "Erro ao buscar grupos." });
  }
};

/**
 * Adiciona um novo grupo ao banco de dados.
 */
export const addGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;

    // Validação básica
    if (!name || typeof name !== "string" || !name.trim()) {
      res.status(400).json({ message: "O nome do grupo é obrigatório e deve ser uma string válida." });
      return;
    }

    const newGroup = await groupService.addGroup(name);
    res.status(201).json({ data: newGroup });
  } catch (error) {
    console.error("Erro ao criar grupo:", error);
    res.status(500).json({ message: "Erro ao criar o grupo." });
  }
};
