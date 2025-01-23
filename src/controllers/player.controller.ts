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
