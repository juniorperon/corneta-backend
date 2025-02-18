import IPlay from "../interfaces/IPlay";
import PlayRepository from '../repositories/PlayRepository';


export class PlayService {
  /**
   * Retorna todos os grupos do banco de dados.
   */
  async getPlays(groupId: number): Promise<IPlay[]> {
    return await PlayRepository.getPlays(groupId);
  }

  /**
   * Adiciona um novo play ao banco de dados.
   * 
   * @param name - O nome do play.
   * @param groupId - O nome do play.
   * @param points - O nome do play.
   * @returns O grupo recém-criado.
   */
  async addPlay(name: string, groupId: number, points: number): Promise<IPlay> {
    return await PlayRepository.createPlay({ name, groupId, points });
  }
}
