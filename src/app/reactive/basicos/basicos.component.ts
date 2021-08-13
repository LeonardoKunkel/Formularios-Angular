import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  myForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    precio: [ 0, [ Validators.required, Validators.min(0) ] ],
    existencias: [ 0, [ Validators.required, Validators.min(0) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.myForm.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10 
    })
  }

  fieldIsValid( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
