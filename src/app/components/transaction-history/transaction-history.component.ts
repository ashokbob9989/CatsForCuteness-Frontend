import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  transactions: any[] = [];

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactions = [
      {
        id: 'TXN101',
        amount: 1299,
        mode: 'Credit Card',
        cardUsed: true,
        cardLast4: '5567',
        cardType: 'Visa',
        charges: 20,
        date: new Date('2025-04-01'),
        time: '10:42 AM',
        status: 'Success'
      },
      {
        id: 'TXN102',
        amount: 549,
        mode: 'UPI',
        cardUsed: false,
        charges: 0,
        date: new Date('2025-03-28'),
        time: '3:16 PM',
        status: 'Success'
      },
      {
        id: 'TXN103',
        amount: 799,
        mode: 'Debit Card',
        cardUsed: true,
        cardLast4: '9981',
        cardType: 'Mastercard',
        charges: 12,
        date: new Date('2025-03-20'),
        time: '7:23 PM',
        status: 'Failed'
      }
    ];
  }
}
