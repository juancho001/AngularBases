import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = 'ironMan';
  public edad: number = 45;
  public state:Boolean = true;

  get capitalizeName():string{
    return this.nombre.toLocaleUpperCase();

  }

  public getheroDescription():string{
    return ` ${this.nombre} - ${this.edad}  `
  }

  public changeHero(nameHero:string):void{
    this.nombre = nameHero;
  }

  public changeAge(AgeHero:number):void{
    this.edad = AgeHero;
  }

  public resetFrom():void{
      if(this.nombre == 'Superman.' && this.edad == 60){
        this.nombre = 'ironMan';
        this.edad = 45;
        this.state =  true;
      }
  }
}
