import { Component, output, signal } from '@angular/core';
import type { inputType } from '../../interfaces/input';
import type { Character } from '../../interfaces/character';

@Component({
  selector: 'form-component',
  imports: [],
  templateUrl: './form-component.html'
})
export class FormComponent {
  protected nombre = signal('');
  protected poder = signal('');
  protected dano = signal(0);

  protected emptyFields = signal('');
  count = 1;

  characterCreated = output<Character>();

  inputs: inputType[] = [
    {
      type: 'text',
      id: 'nombre',
      placeholder: 'Gohan',
      label: 'Nombre',
      required: true,
      model: this.nombre
    },
    {
      type: 'text',
      id: 'poder',
      placeholder: 'Super Saiyan',
      label: 'Poder',
      required: true,
      model: this.poder
    },
    {
      type: 'number',
      id: 'dano',
      placeholder: '100',
      label: 'Daño',
      required: true,
      model: this.dano
    }
  ]

  createCharacter() {
    if (!this.nombre() || !this.poder() || !this.dano()) {
      this.emptyFields.set('Por favor, complete todos los campos.');
      return;
    }

    if (this.dano() <= 0) {
      this.emptyFields.set('El daño no puede ser negativo o cero.');
      return;
    }

    const newCharacter: Character = {
      id: this.count++,
      nombre: this.nombre(),
      poder: this.poder(),
      dano: this.dano()
    };

    this.characterCreated.emit(newCharacter);
    this.resetFields();
    this.emptyFields.set('');
  }

  resetFields() {
    this.nombre.set('');
    this.poder.set('');
    this.dano.set(0);
  }
}

