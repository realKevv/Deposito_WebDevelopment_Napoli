import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class ParentComponent {
  // --- APPROCCIO CLASSICO (DECORATOR-BASED) ---
  // Variabile primitiva standard per il flusso di dati classico
  counter: number = 0;

  // --- APPROCCIO MODERNO (SIGNAL-BASED) ---
  // Signal scrivibile (WritableSignal) inizializzato a 0
  counterSignal = signal<number>(0);

  // Gestore per l'output classico: riceve il nuovo valore dal figlio e aggiorna la variabile classica
  onCounterChanged(newValue: number): void {
    this.counter = newValue;
  }

  // Gestore per l'output basato su Signal: riceve il nuovo valore dal figlio e aggiorna il Signal tramite .set()
  onCounterChangedSignal(newValue: number): void {
    this.counterSignal.set(newValue);
  }
}
