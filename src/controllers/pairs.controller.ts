import { Request, Response } from 'express';
import { PairService } from '../services/pair.service';

const pairService = new PairService();

export const addPair = async (req: Request, res: Response): Promise<void> => {
  try {
    const { playerId, partnerId, groupId, edition } = req.body;

    const addPair = await pairService.addPair(playerId, partnerId, groupId, edition);

    res.status(201).json({ message: 'Dupla registradas com sucesso!', data: addPair });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar as dupla.' });
  }
};

export const getPairs = async (req: Request, res: Response): Promise<void> => {
  try {
    const pairs = await pairService.getPairs();
    res.status(200).json({ data: pairs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter as duplas.' });
  }
};
