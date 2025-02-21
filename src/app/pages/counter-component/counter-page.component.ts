import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  contador:number = 10;
  counterSignal = signal(10);
  private result:number = 0;

  incrementBy(num:number):number{
    const result = this.contador = this.contador +  num;
    this.counterSignal.update( (current)=> current + num);
    return result;
  }

  decrementBy(num:number):number{
    if(this.contador > 0){
       this.result = this.contador =this.contador - num;
       this.counterSignal.update( (current)=> current - num);
    }
    return this.result;
  }

  resetCounter():number{
    const result = this.contador = 10;
    this.counterSignal.set(10);
    return result;
  }

}
