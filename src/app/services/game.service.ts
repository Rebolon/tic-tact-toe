import { inject, Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private boardSize = 3;
  public board: string[][] = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(''));
  public currentPlayer: Player = Player.X;
  public winner: Player | null = null;

  makeMove(row: number, col: number): void {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      if (this.checkForWin()) {
        this.winner = this.currentPlayer;
      } else if (this.isDraw()) { // Ajout d'une vérification pour une partie nulle
        this.winner = null; // Partie nulle
      } else {
        this.switchPlayer();
      }
    }
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
  }

  private checkForWin(): boolean {
    // Vérifier les lignes
    for (let i = 0; i < this.boardSize; i++) {
      if (this.isWinningLine(this.board[i])) return true;
    }

    // Vérifier les colonnes
    for (let i = 0; i < this.boardSize; i++) {
      const column: string[] = [];
      for (let j = 0; j < this.boardSize; j++) {
        column.push(this.board[j][i]);
      }
      if (this.isWinningLine(column)) return true;
    }

    // Vérifier les diagonales
    const diagonal1: string[] = [this.board[0][0], this.board[1][1], this.board[2][2]];
    const diagonal2: string[] = [this.board[0][2], this.board[1][1], this.board[2][0]];

    if (this.isWinningLine(diagonal1) || this.isWinningLine(diagonal2)) return true;

    return false;
  }

  private isWinningLine(line: string[]): boolean {
    const first = line[0];
    return line.every(cell => cell === first && cell !== '');
  }

  public isDraw(): boolean { // Méthode pour vérifier si la partie est nulle
    for (let row of this.board) {
      for (let cell of row) {
        if (cell === '') {
          return false;
        }
      }
    }
    return true;
  }

  resetGame(): void {
    this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(''));
    this.currentPlayer = Player.X;
    this.winner = null;
  }
}
