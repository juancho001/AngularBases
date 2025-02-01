import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter : {{counter}}</p>
  <button (click)="increaseBy()">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="decreaseBy()">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }


  public counter:number = 10;

  increaseBy():void{
    this.counter += 1;
  }

  decreaseBy():void{
    this.counter -= 1;
  }

  resetBy():void{
    this.counter = 10;
  }

}
