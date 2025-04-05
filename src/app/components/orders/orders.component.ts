import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    // Dummy data (replace with service call later)
    this.orders = [
      {
        id: 'ODR101',
        name: 'Fluffy Cat Bed',
        description: 'Soft donut-shaped bed for cozy naps.',
        image: 'assets/images/sample3.jpg',
        quantity: 1,
        total: 1299,
        date: new Date('2025-03-30'),
        expectedDelivery: new Date('2025-04-06'),
        status: 'Shipped'
      },
      {
        id: 'ODR102',
        name: 'Tuna Cat Food Pack',
        description: 'Pack of 6 nutritious tuna meals.',
        image: 'assets/images/sample4.jpg',
        quantity: 1,
        total: 549,
        date: new Date('2025-03-20'),
        expectedDelivery: new Date('2025-03-25'),
        status: 'Delivered'
      },
      {
        id: 'ODR103',
        name: 'Interactive Cat Laser Toy',
        description: 'Laser playtime fun for active cats.',
        image: 'assets/images/sample5.jpg',
        quantity: 2,
        total: 799,
        date: new Date('2025-04-01'),
        expectedDelivery: new Date('2025-04-08'),
        status: 'Pending'
      }
    ];
  }

  reorder(order: any) {
    alert(`Reordering item: ${order.name}`);
    // Later: call cartService.addItem(order.itemData)
  }

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
