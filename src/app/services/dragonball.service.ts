import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {

   characters = signal<Character[]>([
      {id:1, nombre:'Goku',poder:9500},
      {id:2, nombre:'Vegeta',poder:8500},
      {id:3, nombre:'Picolo',poder:7500},
      {id:4, nombre:'Kriling',poder:5500},
      {id:5, nombre:'Kriling',poder:500},
    ]);

    saveToLocalStorage = effect(() => {
      //console.log(`Character count : ${this.characters().length}`)
      localStorage.setItem('luchadores',JSON.stringify(this.characters()));
    })

    addCharacter(character:Character){
      this.characters.update(
        list => [... list,character]
      )
    }
}
