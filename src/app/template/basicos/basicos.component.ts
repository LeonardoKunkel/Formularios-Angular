import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    producto: 'RTX 4000',
    precio: 0,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.producto?.invalid && this.myForm?.controls.producto?.touched
  }

  validPrice(): boolean {
    return this.myForm?.controls.precio?.touched && this.myForm?.controls.precio?.value < 0;
  }
  // save( myForm: NgForm ) {
  save() {
    // console.log( this.myForm );
    console.log('Posteo correcto');

    this.myForm.resetForm({
      precio: 0,
      existencias: 0
    })
  }
}
