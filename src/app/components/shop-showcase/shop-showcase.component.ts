import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-showcase.component.html',
  styleUrls: ['./shop-showcase.component.scss']
})
export class ShopShowcaseComponent {
  categories = [
    { name: 'Food', icon: 'shop-food.jpeg', title: 'Nutritious meals for your cat' },
    { name: 'Toys', icon: 'shop-toys.jpeg', title: 'Fun and interactive toys' },
    { name: 'Beds', icon: 'shop-beds.jpeg', title: 'Cozy beds for better sleep' },
    { name: 'Accessories', icon: 'shop-accessories.jpeg', title: 'Useful accessories for your feline' },
    { name: 'Clothes', icon: 'shop-clothes.jpeg', title: 'Stylish and comfortable cat clothes' }
  ];

  products = [
    {
      name: 'Premium Cat Food',
      image: 'assets/cat-food.jpeg',
      price: '$19.99',
      category: 'Food',
      title: 'High-quality nutritious cat food'
    },
    {
      name: 'Soft Cat Bed',
      image: 'assets/cat-bed.jpeg',
      price: '$29.99',
      category: 'Beds',
      title: 'Ultra-soft and cozy cat bed'
    },
    {
      name: 'Interactive Toy Set',
      image: 'assets/cat-toy.jpeg',
      price: '$14.99',
      category: 'Toys',
      title: 'Exciting toy set to keep your cat engaged'
    },
    {
      name: 'Stylish Cat Collar',
      image: 'assets/cat-collar.jpeg',
      price: '$9.99',
      category: 'Accessories',
      title: 'Elegant and comfortable cat collar'
    },
    {
      name: 'Warm Winter Sweater',
      image: 'assets/cat-clothes.jpeg',
      price: '$24.99',
      category: 'Clothes',
      title: 'Warm and stylish sweater for cold days'
    }
  ];
}
