import { Component, OnInit, inject } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  template: `
  <div class="board">
  @for (row of gameService.board; track $index; let rowIndex = $index) {
    <div class="row">
      @for (cell of row; track $index; let colIndex = $index) {
        <div
          (click)="makeMove(rowIndex, colIndex)"
          [class.winning]="hasAWinner(rowIndex, colIndex)"
          class="cell"
        >
          {{ cell }}
        </div>
      }
    </div>
  }
  </div>

  @if (gameService.winner; as winner) {
    <div class="winner-message">Le joueur {{ winner }} a gagné !</div>
  } @else if (isDraw()) {
    <div class="draw-message">Match nul !</div>
  }

  <button (click)="resetGame()">Reset Game</button>
  `,
  styles: [
    `.board {
      display: flex;
      flex-direction: column;
    }

    .row {
      display: flex;
    }

    .cell {
      width: 100px;
      height: 100px;
      border: 2px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    .winning {
      background-color: #f8d7da; /* Couleur pour les cases du gagnant */
    }

    .cell:not(:first-child) {
      margin-left: -2px; /* Adjust for overlapping borders */
    }

    .winner-message  .draw-message {
      margin-top: 15px;
      font-size: 20px;
    }`
  ]
})
export class BoardComponent {
  protected gameService: GameService = inject(GameService)

  makeMove(row: number, col: number): void {
    if (!this.gameService.winner) { // Empêcher les clics une fois qu'il y a un gagnant
      this.gameService.makeMove(row, col);
    }
  }

  resetGame(): void {
    this.gameService.resetGame();
  }

  hasAWinner(rowIndex: number, colIndex: number): boolean {
    return !!this.gameService.winner && this.gameService.board[rowIndex][colIndex] === this.gameService.winner;
  }

  isDraw(): boolean {
    return this.gameService.board.flat().every(cell => cell !== '');
  }
}
