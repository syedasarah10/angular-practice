import { Component, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() character: any;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }


  onAssign(side: string) {
    //this.character.side =side;
    //this.sideAssinged.emit({name: this.character.name, side:side})
    this.swService.onSideChosen({name: this.character.name, side:side})
  }
}
