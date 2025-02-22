import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name =  signal('IronMan');
  age = signal(45);


  getHeroDescription():string{
    return `Personaje ==> ${this.name()} , Edad ==> ${this.age()}`;
  }

  changeName(){
    this.name.set('SpiderMan');
  }

  changeAge(){
    this.age.set(22);
  }

  resetHero(){
    this.name.set('IronMan');
    this.age.set(45);
  }

}
