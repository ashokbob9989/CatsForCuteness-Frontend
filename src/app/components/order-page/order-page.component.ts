import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  order = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    whatsappUpdates: false,
  };

  adoptedCat: any = null;

  gst = 0;
  cgst = 0;
  deliveryCharge = 120;
  total = 0;

  deliveryCountdown = '';
  intervalId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const catData = history.state.cat;
    if (catData) {
      this.adoptedCat = catData;
      this.calculateCharges();
      this.startCountdown();
    }
  }

  calculateCharges() {
    this.gst = this.adoptedCat.price * 0.05;
    this.cgst = this.adoptedCat.price * 0.05;
    this.total = this.adoptedCat.price + this.gst + this.cgst + this.deliveryCharge;
  }

  startCountdown() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = futureDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      this.deliveryCountdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(this.intervalId);
        this.deliveryCountdown = 'Delivered!';
      }
    }, 1000);
  }

  placeOrder() {
    // Simulate APIs
    alert('Order placed! You will receive confirmation via WhatsApp, Email, and SMS.');

    this.sendWhatsApp(this.order.phone);
    this.sendEmail(this.order.email);
    this.sendSMS(this.order.phone);
  }

  sendWhatsApp(phone: string) {
    console.log(`Sending WhatsApp notification to ${phone}`);
    // Integrate with Twilio WhatsApp or Meta Business API here
  }

  sendEmail(email: string) {
    console.log(`Sending confirmation email to ${email}`);
    // Integrate with SendGrid, Mailgun, etc.
  }

  sendSMS(phone: string) {
    console.log(`Sending SMS confirmation to ${phone}`);
    // Integrate with Twilio SMS, MSG91, etc.
  }
}
