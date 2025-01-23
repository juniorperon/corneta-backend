import Play from "../models/play.model";

export class PlayService {
  /**
   * Retorna todos os grupos do banco de dados.
   */
  async getPlays(): Promise<Play[]> {
    return await Play.findAll();
  }

  /**
   * Adiciona um novo play ao banco de dados.
   * 
   * @param name - O nome do play.
   * @returns O grupo recém-criado.
   */
  async addPlay(name: string, groupId: number, points: number): Promise<Play> {
    return await Play.create({ name, groupId, points });
  }
}
