import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoriasService } from '../../Services/categorias';
import { Tabla } from '../../Components/tabla/tabla';

@Component({
  selector: 'app-categorias',
  imports: [Tabla],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias implements OnInit {
  data: any[] = [];

  constructor(private categoriasService: CategoriasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe((rows: any[]) => {
      this.data = rows;
      this.cdr.detectChanges();
    });
  }
}
