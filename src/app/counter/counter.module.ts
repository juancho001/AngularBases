import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[

  ],imports:[

    CounterComponent,
    CommonModule
  ],exports:[
    CounterComponent
  ]
})
export class CounterModule{}
