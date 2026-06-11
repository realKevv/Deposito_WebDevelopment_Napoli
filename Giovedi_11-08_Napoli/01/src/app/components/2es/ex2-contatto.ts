import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex2-contatto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ex2-contatto.html',
  styleUrl: './ex2-contatto.css',
})
export class Ex2ContattoComponent implements OnInit {
  contattoForm!: FormGroup;
  datiInviati: any = null;

  ngOnInit() {
    this.contattoForm = new FormGroup({
      oggetto: new FormControl('', Validators.required),
      messaggio: new FormControl('', [Validators.required, Validators.minLength(10)]),
      urgenza: new FormControl('', Validators.required)
    });
  }

  get conteggioCaratteri(): number {
    return this.contattoForm.get('messaggio')?.value?.length || 0;
  }

  onInvia() {
    if (this.contattoForm.valid) {
      this.datiInviati = { ...this.contattoForm.value };
      this.contattoForm.reset();
    }
  }
}
