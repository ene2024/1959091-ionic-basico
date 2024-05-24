import { Component, OnInit } from '@angular/core';
import {ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }

  productos: any[] = [
    { id: 1, title: 'Lechuga', price: 15 },
    { id: 2, title: 'Flores', price: 250 },
    { id: 3, title: 'Huevo', price: 110 },
  ];

  obtenerProductos(): void { this.consulta.getProductos().subscribe((resp: Object) => {console.log(resp);this.productos = resp as any[];})};

  ngOnInit() {}

}
