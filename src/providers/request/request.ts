import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrivialCard } from '../../app/model/card';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  baseUrl = 'https://opentdb.com/api.php?amount=1';
  cards: TrivialCard[];

  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
    this.cards = new Array<TrivialCard>();

  }

  doGetRequest(url: string): Observable<any>{
    return this.http.get(url);
  }

}
