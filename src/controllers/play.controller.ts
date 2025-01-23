import { Request, Response } from "express";
import { PlayService } from "../services/play.service";

const playService = new PlayService();

/**
 * Retorna todos os plays do banco de dados.
 */
export const getPlays = async (req: Request, res: Response): Promise<void> => {
  try {
    const plays = await playService.getPlays();
    res.status(200).json({ data: plays });
  } catch (error) {
    console.error("Erro ao buscar plays:", error);
    res.status(500).json({ message: "Erro ao buscar plays." });
  }
};

/**
 * Adiciona um novo play ao banco de dados.
 */
export const addPlay = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, groupId, points } = req.body;

    if (!name || typeof name !== "string" || !name.trim()) {
      res.status(400).json({ message: "O nome do grupo é obrigatório e deve ser uma string válida." });
      return;
    }

    const newPlay = await playService.addPlay(name, groupId, points);
    res.status(201).json({ data: newPlay });
  } catch (error) {
    console.error("Erro ao criar play:", error);
    res.status(500).json({ message: "Erro ao criar o play." });
  }
};
