// src/services/group.service.ts
import Group from "../models/group.model";

export class GroupService {
  /**
   * Retorna todos os grupos do banco de dados.
   */
  async getGroups(): Promise<Group[]> {
    return await Group.findAll();
  }

  /**
   * Adiciona um novo grupo ao banco de dados.
   * 
   * @param name - O nome do grupo.
   * @returns O grupo recém-criado.
   */
  async addGroup(name: string): Promise<Group> {
    return await Group.create({ name });
  }
}
