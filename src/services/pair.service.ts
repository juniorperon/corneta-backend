import { Pair } from '../models/pair.model';

export class PairService {
  /**
   * Retorna todos os players do banco de dados.
   */
  async getPairs(): Promise<Pair[]> {
    return await Pair.findAll();
  }

  /**
   * Adiciona um novo player ao banco de dados.
   * 
   * @param playerId - O id do player.
   * @param partnerId - O id do partner.
   * @param groupId - O id do grupo.
   * @param edition - O nome da edição.
   * @returns A dupla recém-criada.
   */
  async addPair(playerId: number, partnerId: number, groupId: number, edition: string): Promise<Pair> {
    return await Pair.create({ playerId, partnerId, groupId, edition });
  }
}

