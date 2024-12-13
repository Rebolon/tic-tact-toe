import { Player } from "./player";

export interface Move {
  row: number;
  col: number;
  player: Player;
}
