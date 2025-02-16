import Player from '../entities/Player';
import IPlayer from '../interfaces/IPlayer';
import { AppDataSource } from '../../database/datasource';

const playerRepository = AppDataSource.getRepository(Player);

const getPlayers = (groupId: number): Promise<IPlayer[]> => {
  return playerRepository.find(
    {
      where: { groupId }
    }
  );
}

const createPlayer = async (playerData: IPlayer): Promise<IPlayer> => {
  const player = playerRepository.create(playerData);
  return await playerRepository.save(player);
}

export default { getPlayers, createPlayer };