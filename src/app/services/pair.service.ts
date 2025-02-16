import PairRepository from '../repositories/PairRepository';
import IPair from '../interfaces/IPair';

export class PairService {
  /**
   * Retorna todos os players do banco de dados.
   */
  async getPairs(groupId: number): Promise<IPair[]> {
    return await PairRepository.getPairs(groupId);
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
  async addPair(playerId: number, partnerId: number, groupId: number, edition: string): Promise<IPair> {
    return await PairRepository.createPair({ playerId, partnerId, groupId, edition });
  }
}

