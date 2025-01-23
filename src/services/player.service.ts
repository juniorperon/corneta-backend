import { Player } from '../models/player.model';

export class PlayerService {
  /**
   * Retorna todos os players do banco de dados.
   */
  async getPlayers(): Promise<Player[]> {
    return await Player.findAll();
  }

  /**
   * Adiciona um novo player ao banco de dados.
   * 
   * @param name - O nome do player.
   * @param groupId - O grupo do player.
   * @returns O player recém-criado.
   */
  async addPlayer(name: string, groupId: number, points: number): Promise<Player> {
    console.log("PLAYER")
    return await Player.create({ name, groupId, points });
  }
}
