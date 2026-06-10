import { Component } from '@angular/core';
import { HighlightDirective } from '../../direttive/customDirective/highlight';

export interface Student {
  name: string;
  grade: number;
  present: boolean;
}

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  students = [
    { name: 'Giulia', grade: 8, present: true },
    { name: 'Marco', grade: 5, present: false },
    { name: 'Sofia', grade: 10, present: true },
    { name: 'Luca', grade: 6, present: true },
    { name: 'Anna', grade: 4, present: false },
  ]

  getValutazione(voto: number): string {
    if (voto >= 9) return 'Ottimo';
    if (voto >= 7) return 'Buono';
    if (voto >= 6) return 'Sufficente';
    return "insufficente";

  }
}
