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
  colorArray: string[];
  solid = [true,true,true,true];

  constructor() {
    console.log('Hello CardComponent Component');
  }

  answerCard(index: number) {
    this.card.answered = true;
    this.card.indexAnswer = index;
    if(this.card.correctAnswer === this.card.answers[index]){
      this.card.correct = true;
    }
    this.colorArray = new Array<string>();
    for(let index = 0;index < this.card.answers.length;index++) {
      if(index === this.card.indexAnswer && this.card.correct === false){
        this.colorArray[index] = 'danger';
        this.solid[index] = false;
      }
      else if(this.card.answers[index] === this.card.correctAnswer){
        this.colorArray[index] = 'secondary';
        this.solid[index] = false;
      } else{
        this.colorArray[index] = 'dark';
      }
      
    }
  }
}
