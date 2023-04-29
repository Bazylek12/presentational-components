import { Component } from '@angular/core';
import { CardViewModel } from './components/card/card.view-model';

@Component({
  selector: 'components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'components';
  readonly card: CardViewModel = {
    title: "Hello",
    description: "I am a card!"
  }
}
