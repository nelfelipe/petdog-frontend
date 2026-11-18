import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  producto = {
    codigo: '',
    nombre: '',
    categoria: '',
    tamano: '',
    precio: 0,
    stock: 0
  };

  registrarProducto() {
    console.log('Producto registrado:', this.producto);
  }
}