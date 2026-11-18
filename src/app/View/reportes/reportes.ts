import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReportesService } from '../../Services/reportes';
import { Tabla } from '../../Components/tabla/tabla';

@Component({
  selector: 'app-reportes',
  imports: [Tabla],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css',
})
export class Reportes implements OnInit {
  masVendidos: any[] = [];
  gastoClientes: any[] = [];
  comprasPorDia: any[] = [];

  constructor(private reportesService: ReportesService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.reportesService.getMasVendidos().subscribe((rows: any[]) => {
      this.masVendidos = rows;
      this.cdr.detectChanges();
    });

    this.reportesService.getGastoClientes().subscribe((rows: any[]) => {
      this.gastoClientes = rows;
      this.cdr.detectChanges();
    });

    this.reportesService.getComprasPorDia().subscribe((rows: any[]) => {
      this.comprasPorDia = rows;
      this.cdr.detectChanges();
    });
  }
}
