import GroupRepository from '../repositories/GroupRepository';
import IGroup from '../interfaces/IGroup';

class GroupService {
  async getAllGroups(): Promise<IGroup[]> {
    return await GroupRepository.getGroups();
  }

  async createGroup(name: string): Promise<IGroup> {
    if (!name) {
      throw new Error("O campo 'name' é obrigatório.");
    }

    const newGroup = await GroupRepository.createGroup({ name });
    return newGroup;
  }
}

export default new GroupService();
