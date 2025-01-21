// src/controllers/pairs.controller.ts
import { Request, Response } from 'express';
import { PairService } from '../services/pairs.service';

const pairService = new PairService();

export const registerPairs = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pairs, groupId } = req.body;

    if (!pairs || !groupId) {
      res.status(400).json({ message: 'Dados inválidos. Envie "pairs" e "groupId".' });
      return;
    }

    const registeredPairs = await pairService.registerPairs(pairs, groupId);

    res.status(201).json({ message: 'Duplas registradas com sucesso!', data: registeredPairs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar as duplas.' });
  }
};

export const getPairs = async (req: Request, res: Response): Promise<void> => {
  try {
    const pairs = await pairService.getAllPairs();
    res.status(200).json({ data: pairs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter as duplas.' });
  }
};
