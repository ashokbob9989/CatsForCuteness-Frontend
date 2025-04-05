import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    // Dummy Data (replace this logic later with wishlistService.getWishlist())
    this.wishlistItems = [
      {
        id: 1,
        name: 'Persian Cat Hoodie',
        description: 'Cute hoodie for your Persian cat.',
        image: 'assets/images/sample1.jpg',
        price: 699,
        tag: 'Best Pick',
        dateAdded: new Date()
      },
      {
        id: 2,
        name: 'Catnip Toy Mouse',
        description: 'Fun toy with high-quality catnip.',
        image: 'assets/images/sample2.jpg',
        price: 199,
        tag: 'New Arrival',
        dateAdded: new Date()
      }
    ];
  }

  removeFromWishlist(item: any): void {
    // Placeholder - implement using service later
    this.wishlistItems = this.wishlistItems.filter(i => i.id !== item.id);
    alert('Item removed from wishlist'); // replace with toast later
  }

  addToCart(item: any): void {
    // Placeholder - implement using cart service later
    alert('Item added to cart'); // replace with toast later
    this.removeFromWishlist(item);
  }
}
