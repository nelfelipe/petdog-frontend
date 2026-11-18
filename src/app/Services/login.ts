import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  // Envía el usuario y la contraseña a la url que le pasen
  post(url: string, body: { usuario: string; contrasena: string }): Observable<any> {
    return this.http.post<any>(url, body);
  }
}
