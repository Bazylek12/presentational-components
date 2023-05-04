import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [AddressFormComponent],
  providers: [],
  exports: [AddressFormComponent]
})
export class AddressFormComponentModule {
}
