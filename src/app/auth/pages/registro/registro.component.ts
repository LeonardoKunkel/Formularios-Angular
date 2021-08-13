import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeBlakes, emailPattern, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    username: ['', [ Validators.required, this.validatorService.cantBeBlakes ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    password2: ['', [ Validators.required ] ],
  }, {
    validators: [ this.validatorService.sameFields('password', 'password2') ]
  });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTaked ) {
      return 'El email ya está registrado'
    }

    return '';

  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Leonardo Bravo',
      email: 'mr_kunkel@hotmail.com',
      username: 'leo_kunkel',
      password: '123456',
      password2: '123456'
    })
  }

  fieldNotValid( field: string ) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
    
  }

}
