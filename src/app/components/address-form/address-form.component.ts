import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'address-form',
  styleUrls: ['./address-form.component.scss'],
  templateUrl: './address-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent {
  @Input() form!: FormGroup 
}
