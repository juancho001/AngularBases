import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  contador:number = 10;
  private result:number = 0;

  incrementBy(num:number):number{
    const result = this.contador = this.contador +  num;
    return result;
  }

  decrementBy(num:number):number{
    if(this.contador > 0){
       this.result = this.contador =this.contador - num;
    }
    return this.result;
  }

  resetCounter():number{
    const result = this.contador = 10;
    return result;
  }

}
