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


  getRandomImage(){

    // let options = {
    //   headers: new HttpHeaders({
    //     responseType: "blob"
    //   })
    // }
    const KEY = '15033136-3bffada2c63cde092d3f574b9';
    //return this.http.get('https://picsum.photos/200', { responseType: 'blob' });
    return this.http.get('https://pixabay.com/api/?key='+KEY+'&q=laughing&image_type=photo');
                          

  }


}
