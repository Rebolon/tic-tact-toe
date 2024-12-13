import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { GameService } from '../services/game.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [GameService],
      imports: [BoardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call makeMove when cell is clicked', () => {
    const spy = spyOn(component, 'makeMove');
    component.makeMove(0, 0);
    expect(spy).toHaveBeenCalledWith(0, 0);
  });

  it('should reset game correctly', () => {
    component.resetGame();
    expect(gameService.board.flat().every((cell: string) => cell === '')).toBeTrue();
    expect(gameService.winner).toBeNull();
    expect(gameService.currentPlayer).toBe('X');
  });

  it('hasAWinner should return true if the cell belongs to the winner', () => {
    gameService.board[0] = ['X', 'X', 'X'];
    gameService.makeMove(1, 1);
    gameService.makeMove(2, 2);
    expect(component.hasAWinner(0, 0)).toBeTrue();
  });

  it('isDraw should return true if the board is full and there\'s no winner', () => {
    gameService.board[0] = ['X', '0', 'X'];
    gameService.board[1] = ['0', '0', 'X'];
    gameService.board[2] = ['X', 'X', '0'];

    expect(component.isDraw()).toBeTrue();
  });
});
