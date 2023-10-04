import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  characters = [
    {name:'Luke Skywalker', side: ''},
    {name:'Darth Vader', side:''}
  ]
  onChoose(side:any) {
    this.chosenList = side;
  }
  chosenList = 'all';
  getCharacters(): any {
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    })
  }

  onSideChosen(charInfo:any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
