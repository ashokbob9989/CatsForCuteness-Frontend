import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use directives like *ngFor and [class]
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss']
})
export class ContactUsSectionComponent {
  socialLinks = [
    { name: 'Twitter', icon: 'twitter.png', url: 'https://twitter.com/yourpage' },
    { name: 'Instagram', icon: 'instagram.png', url: 'https://instagram.com/yourpage' },
    { name: 'Facebook', icon: 'facebook.png', url: 'https://facebook.com/yourpage' },
    { name: 'Email', icon: 'mail.png', url: 'mailto:support@catsforcuteness.com' }
  ];
}
