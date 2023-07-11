import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface UserData {
  nombres: FormControl<string | null>;
  apaterno: FormControl<string | null>;
  amaterno: FormControl<string | null>;
  email: FormControl<string | null>;
  usuario: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {

  nombresControl = new FormControl('', [Validators.required]);
  apaternoControl = new FormControl('', [Validators.required]);
  amaternoControl = new FormControl('');
  emailControl = new FormControl('', [Validators.required]);
  usuarioControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);




  userModel: FormGroup<UserData> = new FormGroup({
    nombres: this.nombresControl,
    apaterno: this.apaternoControl,
    amaterno: this.amaternoControl,
    email: this.emailControl,
    usuario: this.usuarioControl,
    password: this.passwordControl,
  });

}
