import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../service/shopping-list.service';
@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})


export class AddItem {
  private shoppingListService = inject(ShoppingListService)

  onAdd(inputElement: HTMLInputElement) {
    const value = inputElement.value;
    if (value) {
      this.shoppingListService.addItem(value);
      inputElement.value = '';
    }
  }
}
