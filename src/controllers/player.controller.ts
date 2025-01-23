import { Request, Response } from 'express';
import { PlayerService } from '../services/player.service';

const playerService = new PlayerService();

export const getPlayers = async (req: Request, res: Response): Promise<void> => {
  try {
    const players = await playerService.getPlayers();
    res.status(200).json({ data: players });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar jogadores.' });
  }
};

export const addPlayer = async (req: Request, res: Response): Promise<void> => {
  console.log("AQUI")
  try {
    const { name, groupId, points } = req.body
    console.log("Name")
    const player = await playerService.addPlayer(name, groupId, points);
    res.status(200).json({ data: player });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar jogadores.' });
  }
};
