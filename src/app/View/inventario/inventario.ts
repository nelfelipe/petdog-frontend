import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { InventarioService } from '../../Services/inventario';
import { Tabla } from '../../Components/tabla/tabla';

@Component({
  selector: 'app-inventario',
  imports: [Tabla],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario implements OnInit {
  data: any[] = [];

  constructor(private inventarioService: InventarioService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.inventarioService.getProductos().subscribe((rows: any[]) => {
      this.data = rows;
      this.cdr.detectChanges();
    });
  }
}
