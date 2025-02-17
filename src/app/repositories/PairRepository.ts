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

const getPairByPlayerId = (groupId: number, playerId: number, edition: string): Promise<IPair[]> => {
  return pairRepository.find(
    {
      where: [
        { groupId, playerId, edition },
        { groupId, partnerId: playerId, edition }
      ]
    }
  );
}

const createPair = async (pairData: IPair): Promise<IPair> => {
  const pair = pairRepository.create(pairData);
  return await pairRepository.save(pair);
}

export default { getPairs, createPair, getPairByPlayerId };