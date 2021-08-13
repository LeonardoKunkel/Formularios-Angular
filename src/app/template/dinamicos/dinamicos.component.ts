import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: String;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Leonardo',
    favoritos: [
      { id: 1, nombre: 'Halo' },
      { id: 2, nombre: 'Gears of War' },
    ]
  }

  newGame: string = '';

  constructor() { }

  addGame() {
    const newFavorite: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.newGame
    }

    this.persona.favoritos.push( { ...newFavorite } );
    this.newGame = '';
  }

  save() {
    console.log('Formulario posteado');
  }

  delete( index: number ) {
    this.persona.favoritos.splice(index, 1)
  }
}
