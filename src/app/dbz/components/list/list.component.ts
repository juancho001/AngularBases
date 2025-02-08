import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [{
    name:'Trunks',
    power:10
  }]

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?:string):void{
    //TODO: logica para eliminar el objeto de la lista
    if (!id) return;
    this.onDelete.emit(id);
  }
}
