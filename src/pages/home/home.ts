import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { TrivialCard } from '../../app/model/card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public service: RequestProvider) {

  }

  ionViewWillEnter(){
    this.service.doGetRequest(this.service.baseUrl).subscribe((data) => this.success(data), (error) => this.error(error), this.finally())
  }

  finally(): any {
  }
  error(arg0: any): any {
  }
  success(data: any): any {
    console.log(data);
    for(let card in data.results){
      this.service.cards.push(new TrivialCard(card));
    }
  }


}
