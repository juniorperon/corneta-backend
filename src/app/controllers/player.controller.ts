import { Request, Response } from 'express';
import { PlayerService } from '../services/player.service';

const playerService = new PlayerService();

export const getPlayers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const players = await playerService.getPlayers(Number(groupId));
    res.status(200).json({ data: players });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar jogadores.' });
  }
};

export const addPlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, groupId, points } = req.body;
    if (!name || typeof name !== "string" || !name.trim()) {
      res.status(400).json({ message: "O nome do player é obrigatório e deve ser uma string válida." });
      return;
    }

    const newPlayer = await playerService.addPlayer(name, groupId, points);
    res.status(200).json({ data: newPlayer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar jogadores.' });
  }
};

export const addPointsToPlayer = async (req: Request, res: Response): Promise<any> => {
  try {
    const { playerId, points } = req.body;

    if (!playerId || !points) {
      return res.status(400).json({ message: "Parâmetros ausentes" });
    }

    const message = await playerService.addPointsToPlayer(Number(playerId), Number(points));
    return res.status(200).json({ message });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

