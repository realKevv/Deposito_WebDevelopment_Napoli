import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ex1-registrazione',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex1-registrazione.html',
  styleUrl: './ex1-registrazione.css'
})
export class Ex1RegistrazioneComponent {
  user = {
    nome: '',
    email: '',
    eta: null as number | null
  };

  registrato = false;
  nomeUtente = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.nomeUtente = this.user.nome;
      this.registrato = true;
      form.resetForm();
      this.user = {
        nome: '',
        email: '',
        eta: null
      };
    }
  }

  dismissAlert() {
    this.registrato = false;
  }
}