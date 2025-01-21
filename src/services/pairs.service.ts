// src/services/pairs.service.ts
import { Pair } from '../models/pair.model';

export class PairService {
  private pairs: Pair[] = []; // Simulação de banco de dados em memória.

  async registerPairs(pairs: Pair[], groupId: string): Promise<Pair[]> {
    // Simula lógica para adicionar duplas ao banco
    const registeredPairs = pairs.map(pair => ({
      ...pair,
      group_id: groupId,
    }));

    this.pairs.push(...registeredPairs); // Adiciona ao "banco"
    return registeredPairs;
  }

  async getAllPairs(): Promise<Pair[]> {
    return this.pairs;
  }
}
