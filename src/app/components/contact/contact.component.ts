import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  feedback: string = '';

  sendMessage() {
    if (this.name && this.email && this.message) {
      alert('Your message was sent! Our team of cats will get back to you 🐾');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    } else {
      alert('Please fill in all required fields 😺');
    }
  }

  sendFeedback() {
    if (this.feedback) {
      alert('Thanks for your feedback! You’ve made our tails wag 🐕');
      this.feedback = '';
    }
  }
}
