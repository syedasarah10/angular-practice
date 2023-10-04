import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() character: any;
  @Output() sideAssinged = new EventEmitter<{name:string, side:string }>();


  onAssign(side: string) {
    //this.character.side =side;
    this.sideAssinged.emit({name: this.character.name, side:side})
  }
}
