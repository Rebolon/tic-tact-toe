import { Component } from '@angular/core';
import { BoardComponent } from "./board/board.component";

@Component({
  selector: 'app-root',
  imports: [BoardComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-board></app-board>
  `,
  styles: [],
})
export class AppComponent {
  title = 'tic-tac-toe';
}
