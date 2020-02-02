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
  isLoading;
  constructor(private http: HttpClient, private getJokesService: GetJokesService) { 

  }

  ngOnInit() {
    this.loadNewJoke();
  }

  loadNewJoke(){
    this.isLoading = true;
    this.getJokesService.getJoke().subscribe((resp) => {
      this.daJoke = resp['joke'];
    });

  }

}
