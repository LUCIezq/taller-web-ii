import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../components/title.component/title.component';
import { FormComponent } from '../../components/form-component/form-component';
import { Character } from '../../interfaces/character';
import { ListComponent } from "../../components/list-component/list-component";

@Component({
  selector: 'app-dragon-ball.page',
  imports: [TitleComponent, FormComponent, ListComponent],
  templateUrl: './dragon-ball.page.html'
})
export class DragonBallPage {

  characters = signal<Character[]>([])

  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

  deleteCharacter(id: number) {
    this.characters.update(chars => chars.filter(char => char.id !== id));
  }
}
