import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'rating-view',
  styleUrls: ['./rating-view.component.scss'],
  templateUrl: './rating-view.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingViewComponent implements OnInit {

  @Input() max = 0;
  @Input() value = 0;
  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  private _starsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public $stars: Observable<number[]> = this._starsSubject.asObservable();

  public onStarSelected(index: number): void {
    const newStarsArray = Array(this.max)
      .fill(0, 0, this.max)
      .fill(1, 0, index + 1);
    this._starsSubject.next(newStarsArray);
    this.clicked.emit(index + 1);
  }

  ngOnInit(): void {
    const emptyArray = new Array<number>(this.max).fill(0);
    const numberOfFullStars = Math.floor(this.value);
    const halfStar = this.value + 1 > numberOfFullStars && this.value % 1 !== 0 ? true : false;

    this._starsSubject.next(
      emptyArray.map((star, index) => {
        if (index < numberOfFullStars) return 1;
        else if (index == numberOfFullStars && halfStar) return 0.5;
        else return 0;
      })
    );
  }
}
