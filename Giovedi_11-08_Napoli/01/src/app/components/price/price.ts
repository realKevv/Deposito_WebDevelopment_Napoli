import { Component, signal, computed } from '@angular/core';



@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.html',
  styleUrls: ['./price.css']
})

export class Price {
  prezzoNetto = signal<number>(100);
  iva = signal<number>(22);

  prezzoLordo = computed(() => {
    return this.prezzoNetto() * (1 + this.iva() / 100)
  })


  aggiornaPrezzoNetto(event: Event): void {
    const input = event.target as HTMLInputElement;
    const valoreNumerico = parseFloat(input.value);

    if (isNaN(valoreNumerico)) {
      this.prezzoNetto.set(0);
    } else {
      this.prezzoNetto.set(valoreNumerico);
    }
  }

}
