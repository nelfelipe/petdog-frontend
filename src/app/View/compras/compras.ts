import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComprasService } from '../../Services/compras';
import { Tabla } from '../../Components/tabla/tabla';

@Component({
  selector: 'app-compras',
  imports: [Tabla],
  templateUrl: './compras.html',
  styleUrl: './compras.css',
})
export class Compras implements OnInit {
  data: any[] = [];

  constructor(private comprasService: ComprasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.comprasService.getCompras().subscribe((rows: any[]) => {
      this.data = rows;
      this.cdr.detectChanges();
    });
  }
}
