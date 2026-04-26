import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'list-component',
  imports: [],
  templateUrl: './list-component.html'
})
export class ListComponent {
  characters = input.required<Character[]>();
  idDelete = output<number>();

  emitDeleteCharacter(id: number) {
    this.idDelete.emit(id);
  }
}
