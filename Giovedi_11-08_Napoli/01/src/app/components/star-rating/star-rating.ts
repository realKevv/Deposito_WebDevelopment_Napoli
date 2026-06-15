import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  standalone: true,
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})


export class StarRatingComponent {

  massimo = input<number>(5);
  votoSelezionato = output<number>();

  votoAttuale = signal<number>(0);

  arrayStelle = computed(() => {
    let listaStelle = [];

    for (let i = 1; i <= this.massimo(); i++) {
      listaStelle.push(i);
    }

    return listaStelle;
  });

  gestisciClick(numeroStella: number): void {
    this.votoAttuale.set(numeroStella);
    this.votoSelezionato.emit(numeroStella);
  }
}