import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../../service/user-preferences-service';

@Component({
  selector: 'app-settings-component',
  imports: [],
  standalone: true,
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {
  // Iniettiamo il service
  preferencesService = inject(UserPreferencesService);

  onNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.preferencesService.setUsername(inputElement.value);
  }
}
