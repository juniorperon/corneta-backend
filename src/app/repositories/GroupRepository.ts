import Group from '../entities/Group';
import IGroup from '../interfaces/IGroup';
import { AppDataSource } from '../../database/datasource';

const groupRepository = AppDataSource.getRepository(Group);

const getGroups = (): Promise<IGroup[]> => {
  return groupRepository.find();
}

const createGroup = async (groupData: IGroup): Promise<IGroup> => {
  const group = groupRepository.create(groupData);
  return await groupRepository.save(group);
}

export default { getGroups, createGroup };