import { Component, signal } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})


export class Feedback {
  votoRicevuto = signal<number | null>(null);
  // FUNZIONE IN ASCOLTO
  onVoto(voto: number): void {
    this.votoRicevuto.set(voto);
  }
}
