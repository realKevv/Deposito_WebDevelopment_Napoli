import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class ChildComponent {
  // --- APPROCCIO CLASSICO (DECORATOR-BASED) ---
  // Riceve il valore numerico dal componente padre tramite binding di proprietà [childCounter]
  @Input() childCounter: number = 0;
  // Emettitore di eventi per notificare al padre le variazioni tramite (counterChange)
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  // --- APPROCCIO MODERNO (SIGNAL-BASED) ---
  // Riceve il valore come Input Signal. È di sola lettura e si legge come una funzione: childCounterSignal()
  childCounterSignal = input<number>(0);
  // Definisce un output basato su Signal (sotto il cofano restituisce un OutputEmitterRef)
  counterChangeSignal = output<number>();

  // Incrementa il contatore classico ed emette il nuovo valore al componente padre
  increment(): void {
    this.counterChange.emit(++this.childCounter);
  }

  // Decrementa il contatore classico ed emette il nuovo valore al componente padre
  decrement(): void {
    this.counterChange.emit(--this.childCounter);
  }

  // Incrementa il contatore Signal ed emette il nuovo valore (+1) al componente padre
  incrementSignal(): void {
    this.counterChangeSignal.emit(this.childCounterSignal() + 1);
  }

  // Decrementa il contatore Signal ed emette il nuovo valore (-1) al componente padre
  decrementSignal(): void {
    this.counterChangeSignal.emit(this.childCounterSignal() - 1);
  }
}
