import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserPreferencesService {
  username = signal<string>("Utente");
  temaScuro = signal<boolean>(false)

  setUsername(nuovoNome: string) {
    this.username.set(nuovoNome);
  }

  toggleTemaScuro() {
    this.temaScuro.update(valoreCorrente => !valoreCorrente);
  }

}
