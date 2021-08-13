import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }


  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.myForm.reset({
      ...this.persona,
      condiciones: false
    });

    this.myForm.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
    });
  }

  save() {

    const formValue = { ...this.myForm.value };
    delete formValue.condiciones;

    this.persona = formValue;

  }
}
