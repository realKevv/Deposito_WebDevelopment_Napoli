import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class ShoppingListService {
  items = signal<string[]>([])

  addItem(nome: string) {
    if (!nome.trim().toLowerCase()) return;
    this.items.update(currentItems => [...currentItems, nome.toLowerCase()])
  }
  removeItem(index: number) {
    this.items.update(currentItems => currentItems.filter((_, i) => i !== index));
  }




}
