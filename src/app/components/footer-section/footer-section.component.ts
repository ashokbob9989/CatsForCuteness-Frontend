import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent {
  currentYear: number = new Date().getFullYear();

  socialLinks = [
    { name: 'Twitter', icon: 'bi-twitter', url: 'https://twitter.com/yourpage' },
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com/yourpage' },
    { name: 'Facebook', icon: 'bi-facebook', url: 'https://facebook.com/yourpage' },
    { name: 'Email', icon: 'bi-envelope', url: 'mailto:support@catsforcuteness.com' }
  ];
}
