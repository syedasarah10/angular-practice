import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class StarWarsService {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  charactersChanged = new Subject<void>();

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  fetchCharcters() {
    this.httpClient
      .get('https://swapi.dev/api/people/')
      .subscribe((data: any) => {
        const extractedChars = data.results;
        const chars = extractedChars.map((char: any) => {
          return {name: char.name, side:''}
        });
        this.characters = chars;
        this.charactersChanged.next();
        //const resp  = data as HttpResponse<Object>
        console.log(chars);
        //return chars;
      });
  }

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
  }
  addCharacter(name: any, side: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
