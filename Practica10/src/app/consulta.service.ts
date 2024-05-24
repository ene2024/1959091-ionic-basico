import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  getProducto: any;
  getProductoDetalle(idProducto: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProductos() {return this.http.get('https://fakestoreapi.com/products')}
}
