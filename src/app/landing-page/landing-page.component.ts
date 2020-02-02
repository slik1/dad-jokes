import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetJokesService } from '../get-jokes.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  daJoke;
  daImage;
  isImageLoading;
  constructor(private http: HttpClient, private getJokesService: GetJokesService) { 
    

  }

  ngOnInit() {
    this.loadNewJoke();


  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  loadNewJoke(){
    this.isImageLoading = true;

    this.getJokesService.getJoke().subscribe((resp) => {
      this.daJoke = resp['joke'];
    });

    this.getJokesService.getRandomImage().subscribe((resp) =>{
      let totalHits = resp['hits'].length;
      console.log('totalHits: ', totalHits);
      let randomHit = this.getRandomInt(totalHits);
      console.log('randomHit: ', randomHit);

      
      console.log(resp['hits']["0"].largeImageURL);
      this.daImage = resp['hits'][randomHit].previewURL;
      //this.createImageFromBlob(resp);
      this.isImageLoading = false;
      
    })
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load",
      () => {
          this.daImage = reader.result;
      },
      false);

    if (image) {
      if (image.type !== "application/pdf")
        reader.readAsDataURL(image);
    }
  }

}
