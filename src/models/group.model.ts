import { Play } from './play.model';
import { Player } from './player.model';
export interface Group {
  id: string;
  name: string;
  player: Player;
  play: Play;
}
