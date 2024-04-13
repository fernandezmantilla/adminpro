import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {
  public formSubmitted: boolean = false;

  public registerForm = this._fb.group({
    nombre: ['Hugo Fernández', [Validators.required, Validators.minLength(6)]],
    email: ['fernandezmantilla@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    password2: ['123456', [Validators.required, Validators.minLength(6)]],
    terminos: [ true, Validators.required],
  }, {
    Validators: this.samePasswords('password','password2')
  });

  constructor(
    private _fb: FormBuilder,
    private _userService: UsuarioService
  ) {}

  crearUsuario() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid){
     return
    }
    this._userService.crearUsuario(this.registerForm.value)
    .subscribe( resp =>{
      console.log('usuario creado');
      console.log(resp);
    }, (err) => console.log(err.error.msg)
  );
  }
  campoNoValido(campo: string): boolean {
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    }
    else {
      return false;
    }
  }
  checkTerminos(): boolean {
  return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }
  checkPassword(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 =  this.registerForm.get('password2')?.value;
    if (( pass1 !== pass2) && this.formSubmitted ){
      return true; 
    }
    else
     {
      return false;
     }
  }
  samePasswords(pass1: string,pass2: string){

    return ( formgroup: FormGroup)=>{
      const passCtrl1 = formgroup.get(pass1);
      const passCtrl2 = formgroup.get(pass2);

      if (passCtrl1?.value === passCtrl2?.value ){
        passCtrl1?.setErrors(null);
      }
      else {
        passCtrl1?.setErrors({
          noEsIgual: true
        })
      }
            
    }
  }
}
