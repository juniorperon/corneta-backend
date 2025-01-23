import { Player } from '../models/player.model';

export class PlayerService {
  private players: Player[] = [];

  async addPlayer(player: Player): Promise<Player> {
    this.players.push(player);
    return player;
  }

  async getPlayers(): Promise<Player[]> {
    return this.players;
  }

  async getPlayersByGroup(groupId: string): Promise<Player[]> {
    return this.players.filter(player => player.groupId === groupId);
  }
}
