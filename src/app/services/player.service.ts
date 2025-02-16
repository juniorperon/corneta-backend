import PlayerRepository from '../repositories/PlayerRepository';
import IPlayer from '../interfaces/IPlayer';

export class PlayerService {
  async getPlayers(groupId: number): Promise<IPlayer[]> {
    return await PlayerRepository.getPlayers(groupId);
  }

  /**
   * Adiciona um novo player ao banco de dados.
   * 
   * @param name - O nome do player.
   * @param groupId - O grupo do player.
   * @returns O player recém-criado.
   */
  async addPlayer(name: string, groupId: number, points: number): Promise<IPlayer> {
    return await PlayerRepository.createPlayer({ name, groupId, points });
  }
}
