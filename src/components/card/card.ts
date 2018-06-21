import { Component, Input } from '@angular/core';
import { TrivialCard } from '../../app/model/card';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() card: TrivialCard;

  constructor() {
    console.log('Hello CardComponent Component');
  }

}
