/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'read-more-panel',
  styleUrls: ['./read-more-panel.component.scss'],
  templateUrl: './read-more-panel.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMorePanelComponent {

  @Input() mainText!: string;
  @Input() readMoreText!: string;
  @Input() openLabel: string = 'Read more';
  @Input() closedLabel: string = 'Read less';

  isReadMoreOpen: boolean = false;
  private _isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isOpen$: Observable<boolean> = this._isOpenSubject.asObservable();
  get buttonLabel(): string {
    return this._isOpenSubject.value ? this.closedLabel : this.openLabel;
  }

  toggleReadMore(): void {
    this._isOpenSubject.next(!this._isOpenSubject.value)
  }
}
