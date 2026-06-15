import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RegistrazioneComponent } from './components/1es/ex1-registrazione';
import { Ex2ContattoComponent } from './components/2es/ex2-contatto';
import { TrafficLight } from './components/traffic-light/traffic-light';
import { Price } from './components/price/price';
import { ParentComponent } from './components/input-output-example/parent';
import { Feedback } from './components/feedback/feedback';
import { ProductList } from './components/product-list/product-list'

import { AddItem } from './components/add-item/add-item';
import { ShoppingList } from './components/shopping-list/shopping-list';
import { SettingsComponent } from './settings/settings-component/settings-component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Ex1RegistrazioneComponent,
    Ex2ContattoComponent,
    TrafficLight,
    Price,
    ParentComponent,
    Feedback,
    ProductList,
    AddItem,
    ShoppingList,
    SettingsComponent
  ], templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}