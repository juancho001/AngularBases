import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
//TODO: forma anterior de como se realiza la inyección de dependencias
// constructor(dragonballservice:DragonballService){}

//TODO: nueva forma de como se realiza la inyección de dependencias
  public dragonballservice = inject(DragonballService);
}
