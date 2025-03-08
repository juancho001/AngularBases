import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  sendLuchador(){
    if( !this.name || !this.power() || this.power() <= 0){
      return;
    }else{
      const newLuchador: Character = {
        id:Math.floor(Math.random()*1000),
        nombre: this.name(),
        poder: this.power()
      }

      // this.characters().push(newLuchador);
      //this.characters.update( (list) => [...list, newLuchador]);
      this.newCharacter.emit(newLuchador);
      this.resetFields();
    }
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
