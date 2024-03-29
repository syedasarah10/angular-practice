import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 characters: any = [];
 activatedRoute: ActivatedRoute;
 swService: StarWarsService;
 loadedSide = 'all'
  subscription: any;



 constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
  this.activatedRoute = activatedRoute;
  this.swService = swService;
 }

 ngOnInit() {
  this.activatedRoute.params.subscribe(
    (params) => {
      this.characters = this.swService.getCharacters(params['side']);
      this.loadedSide = params['side'];
    }
  );
  this.subscription = this.swService.charactersChanged.subscribe(
    () => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    }
  )
 }

 ngOnDestroy() {
  this.subscription.unsubscribe();
 }
}
