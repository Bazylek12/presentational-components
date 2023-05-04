import { Component } from '@angular/core';
import { CardViewModel } from './components/card/card.view-model';
import { ReadMorePanelViewModel } from './components/read-more-panel/read-more-panel.view-model';

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
  readonly panel: ReadMorePanelViewModel = {
    mainText: 'This is the main text.',
    readMoreText: 'This is the read more text.',
    openLabel: 'Open',
    closedLabel: 'Close'
  }
  emitValue(e: number): void {
    console.log(e)
    }
}
