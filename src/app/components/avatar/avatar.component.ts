import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'avatar',
  styleUrls: ['./avatar.component.scss'],
  templateUrl: './avatar.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() imageUrl?: string; 
  @Input() text?: string;
}
