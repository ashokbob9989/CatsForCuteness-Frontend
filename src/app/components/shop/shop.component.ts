import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ShopItem {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  speciality: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  categories = ['All', 'Clothes', 'Food', 'Accessories', 'Beds', 'Toys'];
  selectedCategory = 'All';
  sortOrder = 'asc';

  allItems: ShopItem[] = [
    { id: 1, name: 'Cute Hoodie', price: 19.99, category: 'Clothes', imageUrl: 'https://placekitten.com/300/200', speciality: 'Cozy winter hoodie' },
    { id: 2, name: 'Tuna Delight', price: 5.49, category: 'Food', imageUrl: 'https://placekitten.com/301/200', speciality: 'Rich in Omega 3' },
    { id: 3, name: 'Jingle Ball', price: 3.99, category: 'Toys', imageUrl: 'https://placekitten.com/302/200', speciality: 'Stimulates playtime' },
    { id: 4, name: 'Velvet Bed', price: 29.99, category: 'Beds', imageUrl: 'https://placekitten.com/303/200', speciality: 'Soft and luxurious' },
    { id: 5, name: 'Feather Wand', price: 4.99, category: 'Accessories', imageUrl: 'https://placekitten.com/304/200', speciality: 'Interactive toy' },
    // Add more sample items...
  ];

  itemsPerPage = 6;
  currentPage = 1;

  get filteredItems(): ShopItem[] {
    let items = this.selectedCategory === 'All'
      ? this.allItems
      : this.allItems.filter(i => i.category === this.selectedCategory);

    return items.sort((a, b) =>
      this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  get paginatedItems(): ShopItem[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredItems.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.itemsPerPage);
  }

  get groupedCategories(): string[] {
    const groups = new Set(this.paginatedItems.map(i => i.category));
    return Array.from(groups);
  }

  get itemsGroupedByCategory(): { [category: string]: ShopItem[] } {
    const grouped: { [category: string]: ShopItem[] } = {};
    for (let cat of this.groupedCategories) {
      grouped[cat] = this.paginatedItems.filter(i => i.category === cat);
    }
    return grouped;
  }

  changeCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
  }

  changeSort(order: string): void {
    this.sortOrder = order;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  trackByCategory(index: number, category: string): string {
    return category;
  }

  trackByItemId(index: number, item: ShopItem): number {
    return item.id;
  }

  showInfo(item: ShopItem): void {
    alert(`Speciality: ${item.speciality}`);
  }

  addToWishlist(id: number): void {
    alert(`Item ${id} added to wishlist`);
  }

  goToOrder(item: ShopItem): void {
    alert(`Ordering ${item.name}`);
    // Navigate to order page
  }
}
