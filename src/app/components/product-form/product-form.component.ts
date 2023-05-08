import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductFormViewModel } from './product-form.view-model';

@Component({
  selector: 'product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  private isExist = false
  @Input()  set model(value: ProductFormViewModel | undefined) {
    if (value) {
      this.isExist = true;
      this.form.patchValue({
        name: value.name,
        price: value.price,
        id: value.id
      });
    }
  };

  @Output() submitted = new EventEmitter<Partial<ProductFormViewModel>>();

  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    id: new FormControl(),
  });

  get submitLabel(): string {
    return this.isExist ? 'Update' : 'Create'
  }
  onSubmit(): void {
    if (this.form.valid) {
      const formData: Partial<ProductFormViewModel> = {
        id: this.form.get('id')?.value,
        name: this.form.get('name')?.value,
        price: this.form.get('price')?.value,
      }
    if (this.model?.id) {
      formData.id = this.model.id
    } 
    this.submitted.emit(formData)
    }
}
}