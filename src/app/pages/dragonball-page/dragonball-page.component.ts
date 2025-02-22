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

  characters = signal<Character[]>([
    {id:1, nombre:'Goku',poder:9500},
    {id:2, nombre:'Vegeta',poder:8500},
    {id:3, nombre:'Picolo',poder:7500},
    {id:4, nombre:'Kriling',poder:5500},
    {id:5, nombre:'Kriling',poder:500},
  ]);

}
