import { Component, input, signal } from '@angular/core';

import { StarRatingComponent } from '../star-rating/star-rating';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  nome = input.required<string>();
  prezzo = input.required<number>();
  disponibile = input.required<boolean>();

  votoRicevuto = signal<number | null>(null);

  // FUNZIONE IN ASCOLTO
  salvaVoto(voto: number): void {
    this.votoRicevuto.set(voto);
  }
}
