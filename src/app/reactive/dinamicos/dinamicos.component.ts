import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  myForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      [ 'Halo', Validators.required ],
      [ 'Gears of War', Validators.required ]
    ], Validators.required )
  });

  newFavorite: FormControl = this.fb.control( '', Validators.required )

  get favoritosArr() {
    return this.myForm.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  addFavorite() {
    if ( this.newFavorite.invalid ) {
      return;
    }

    this.favoritosArr.push( this.fb.control( this.newFavorite.value, Validators.required ) );

    this.newFavorite.reset();
  }

  delete( index: number ) {
    this.favoritosArr.removeAt(index);
  }

  save() {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value);
    
  }

  fieldIsValid( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }
}
