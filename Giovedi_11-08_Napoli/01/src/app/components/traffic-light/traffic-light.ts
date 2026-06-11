import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.html',
  styleUrls: ['./traffic.light.css'],
})
export class TrafficLight {
  colore = signal<'rosso' | 'verde' | 'giallo'>('rosso');

  cambiaColore(): void {
    this.colore.update((coloreAttuale) => {
      if (coloreAttuale === 'rosso') return 'verde';
      if (coloreAttuale === 'verde') return 'giallo';
      return 'rosso';
    })
  }

}
