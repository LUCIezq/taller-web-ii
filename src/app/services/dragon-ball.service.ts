import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters = signal<Character[]>([]);

  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

  deleteCharacter(id: number) {
    this.characters.update(chars => chars.filter(char => char.id !== id));
  }
}
