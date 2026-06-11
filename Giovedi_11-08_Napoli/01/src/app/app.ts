import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RegistrazioneComponent } from './components/1es/ex1-registrazione';
import { Ex2ContattoComponent } from './components/2es/ex2-contatto';
import { TrafficLight } from './components/traffic-light/traffic-light';
import { Price } from './components/price/price';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Ex1RegistrazioneComponent, Ex2ContattoComponent, TrafficLight, Price],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}