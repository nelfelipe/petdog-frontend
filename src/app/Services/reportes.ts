import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {

  private readonly url = 'https://petdog-backend-production.up.railway.app/api/v1/reportes';

  constructor(private http: HttpClient) {}

  // Productos más vendidos
  getMasVendidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/mas-vendidos`);
  }

  // Cuánto ha gastado cada cliente
  getGastoClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/gasto-clientes`);
  }

  // Total comprado por día
  getComprasPorDia(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/compras-por-dia`);
  }
}
