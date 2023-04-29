import { Component } from '@angular/core';
import { Rating } from './models/rating';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-rating-practice';

  ratings: Rating[] = [
    {
      name: 'Todd Aaron',
      content: `Commodo sed egestas egestas fringilla phasellus
        faucibus scelerisque eleifend donec pretium vulputate sapien
        nec sagittis aliquam malesuada bibendum arcu vitae`,
      rate: 4
    },
    {
      name: 'Jesse Bing',
      content: `mauris augue neque gravida in fermentum et
        sollicitudin ac orci phasellus egestas`,
      rate: 1
    },
    {
      name: 'Tori Mitchell',
      content: `Fringilla phasellus faucibus scelerisque eleifend
        donec pretium vulputate`,
      rate: 2
    },
    {
      name: 'John Nelson',
      content: `Urna molestie at elementum eu facilisis sed odio
        morbi quis commodo odio aenean`,
      rate: 4
    },
  ]
}
