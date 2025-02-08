
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id:v4(),
    name:'Krillin',
    power:10000
  },{
    id:v4(),
    name:'Goku',
    power:95000
  },
  {
    id:v4(),
    name:'Vegeta',
    power:75000
  }];

  addCharacter(character:Character):void{
    const newCharacter:Character = {id: v4(),...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(characters => characters.id != id)
  }

}
