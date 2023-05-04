import { Component } from '@angular/core';
import { CardViewModel } from './components/card/card.view-model';
import { FormControl, FormGroup } from '@angular/forms';

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
form: FormGroup = new FormGroup({
  street: new FormControl('Dupna'),
  city: new FormControl('Warsaw'),
  countryId: new FormControl(1)
})

  emitValue(e: number): void {
    console.log(e)
    }
}
