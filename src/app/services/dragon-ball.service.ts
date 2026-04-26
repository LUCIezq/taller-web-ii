import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';


const getStoredCharacters = (): Character[] => {
  const stored = localStorage.getItem('characters');
  try {
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Error de parseo.', e);
    return [];
  }
}

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters = signal<Character[]>(getStoredCharacters());

  constructor() {
    effect(() => {
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    })
  }

  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

  deleteCharacter(id: number) {
    this.characters.update(chars => chars.filter(char => char.id !== id));
  }
}
