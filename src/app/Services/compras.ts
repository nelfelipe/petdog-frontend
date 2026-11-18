import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {

  private readonly url = 'http://localhost:3000/api/v1/compras';

  constructor(private http: HttpClient) {}

  // Obtener todas las compras
  getCompras(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
