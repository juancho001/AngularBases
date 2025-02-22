import { Component, signal } from '@angular/core';

interface Character{
  id:number,
  nombre:string,
  poder:number
}


@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id:1, nombre:'Goku',poder:9500},
    {id:2, nombre:'Vegeta',poder:8500},
    {id:3, nombre:'Picolo',poder:7500},
    {id:4, nombre:'Kriling',poder:5500},
    {id:5, nombre:'Kriling',poder:500},
  ]);

  sendLuchador(){
    if( !this.name || !this.power() || this.power() <= 0){
      return;
    }else{
      const newLuchador: Character = {
        id:(this.characters.length + 1),
        nombre: this.name(),
        poder: this.power()
      }

      // this.characters().push(newLuchador);
      this.characters.update( (list) => [...list, newLuchador]);
      this.resetFields();
    }
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
