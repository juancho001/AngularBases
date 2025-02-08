import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html',
  standalone: false
})

export class MainPageComponent  {
  constructor(private dbzservice:DbzService){  }

  // TODO: metodo Getter que retorna un arreglo de personajes
  get characters():Character[]{
    return [...this.dbzservice.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzservice.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzservice.addCharacter(character);
  }
}
