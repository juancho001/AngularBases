import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public listHeroes:string[] = ['Spiderman','Superman','IronMan','Hulk','Batman']
  public deleteHero?:string;

  removeLastHero():void{
    this.deleteHero =  this.listHeroes.pop();
  }

}
