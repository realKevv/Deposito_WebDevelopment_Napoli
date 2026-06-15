import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../service/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})

//Qui riceve gli elementi che ci sono da comprare, i segnali che ci ha dato il shoppingListService
export class ShoppingList {
  shoppingListService = inject(ShoppingListService)
}
