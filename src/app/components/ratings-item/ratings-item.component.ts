import { Component, Input } from '@angular/core';
import { Rating } from '../../models/rating';

@Component({
  selector: 'app-ratings-item',
  templateUrl: './ratings-item.component.html',
  styleUrls: ['./ratings-item.component.scss']
})
export class RatingsItemComponent {
  @Input() name!: string;
  @Input() content!: string;
  @Input() rate!: number;
}
