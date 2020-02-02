import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJokesService {

  constructor(private http: HttpClient) { }

  getJoke(){
    console.log('getJoke fired');

    let options = {
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.get('https://icanhazdadjoke.com/', options);
  }


}
