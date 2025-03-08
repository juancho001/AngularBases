import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage = () : Character[] =>{
  const luchadores = localStorage.getItem('luchadores');
  return luchadores ? JSON.parse(luchadores):[];
}

@Injectable({providedIn: 'root'})
export class DragonballService {

   characters = signal<Character[]>(loadFromLocalStorage());

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
