import { Player } from "../models/player";
import { GameService } from "./game.service";

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    service = new GameService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a winner if the game is won', () => {
    service.board[0] = ['X', 'X', 'X'];
    service.makeMove(1, 1);
    service.makeMove(2, 2);
    expect(service.winner).toBe(Player.X);
  });

  it('should return a draw if the game is tied', () => {
    service.board[0] = ['X', '0', 'X'];
    service.board[1] = ['0', '0', 'X'];
    service.board[2] = ['X', 'X', '0'];

    expect(service.winner).toBeNull();
    expect(service.isDraw()).toBeTrue();
  });

  it('should not allow a move in an already filled cell', () => {
    service.makeMove(1, 1);
    service.makeMove(1, 1);
    expect(service.board[1][1]).toBe(Player.X);
  });
});
