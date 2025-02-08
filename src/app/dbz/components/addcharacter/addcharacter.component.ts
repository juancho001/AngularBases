import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4} from 'uuid';

@Component({
  selector: 'app-addcharacter',
  standalone: false,

  templateUrl: './addcharacter.component.html',
  styleUrl: './addcharacter.component.css'
})
export class AddcharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power:0
  };

  emitCharacter():void{
    //debugger;
    console.log(this.character);
    if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);
    this.character = {      name:'',power:0    }
  }

}
