import Play from '../entities/Play';
import IPlay from '../interfaces/IPlay';
import { AppDataSource } from '../../database/datasource';
import IPlayer from '../interfaces/IPlayer';

const playRepository = AppDataSource.getRepository(Play);

const getPlays = (groupId: number): Promise<IPlay[]> => {
  return playRepository.find(
    {
      where: { groupId }
    }
  );
}

const createPlay = async (playData: IPlay): Promise<IPlay> => {
  const player = playRepository.create(playData);
  return await playRepository.save(player);
}

export default { getPlays, createPlay };