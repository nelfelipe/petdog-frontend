import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { LoginService } from '../../Services/login';

@Component({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly url = 'https://petdog-backend-production.up.railway.app/api/v1/login';

  form: FormGroup;

  constructor(private fb: FormBuilder, public loginService: LoginService) {
    this.form = fb.group({
      user: ['', [Validators.required, Validators.email]],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  Loguear() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else {
      console.log(this.form.controls['user'].value);

      // Lo que el usuario escribió en el formulario
      const body = {
        usuario: this.form.controls['user'].value,
        contrasena: this.form.controls['password'].value,
      };

      this.loginService.post(this.url, body).subscribe({
        // La base de datos dijo que SÍ es correcto
        next: (respuesta) => {
          console.log(respuesta);
          localStorage.setItem('user', this.form.controls['user'].value);

          Swal.fire({
            title: "Registro exitoso",
            icon: "success",
            draggable: true
          });
        },
        // La base de datos dijo que NO es correcto
        error: (error) => {
          Swal.fire({
            title: error.error?.message || 'No se pudo iniciar sesión',
            icon: "error"
          });
        },
      });
    }

    console.log(this.form.value);
  }
}
