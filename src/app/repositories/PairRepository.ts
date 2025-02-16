import Pair from '../entities/Pair';
import IPair from '../interfaces/IPair';
import { AppDataSource } from '../../database/datasource';

const pairRepository = AppDataSource.getRepository(Pair);

const getPairs = (groupId: number): Promise<IPair[]> => {
  return pairRepository.find(
    {
      where: { groupId }
    }
  );
}

const createPair = async (pairData: IPair): Promise<IPair> => {
  const pair = pairRepository.create(pairData);
  return await pairRepository.save(pair);
}

export default { getPairs, createPair };