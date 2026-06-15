import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  prodotti = [
    { nome: 'Laptop', prezzo: 1200, disponibile: true },
    { nome: 'Mouse', prezzo: 30, disponibile: false },
    { nome: 'Tastiera', prezzo: 50, disponibile: true },
    { nome: 'Monitor', prezzo: 200, disponibile: true },
    { nome: 'Stampante', prezzo: 100, disponibile: false }
  ];
}
