import { Component } from '@angular/core';
import { StarWarsService } from './star-wars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'App';
  swService: StarWarsService;


  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit(){
    this.swService.fetchCharcters();
  }
}
