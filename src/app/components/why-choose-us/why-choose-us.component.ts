import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  features = [
    { icon: 'bi bi-person-check', title: 'Verified Adoption Centers', description: 'Find trusted shelters and adoption centers for a loving experience.' },
    { icon: 'shopping-cart', title: 'Premium Cat Supplies', description: 'Get high-quality food, accessories, and toys for your feline friend.' },
    { icon: 'heart', title: 'Expert Care Tips', description: 'Learn from vets and cat experts to keep your pet happy and healthy.' },
    { icon: 'star', title: 'Trending Cat Breeds', description: 'Discover the most popular and unique cat breeds worldwide.' },
    { icon: 'filter', title: 'Find Cats with Advanced Filters', description: 'Search for cats based on breed, age, weight, and personality traits.' },
    { icon: 'exclamation-triangle', title: 'Common Mistakes & Avoidance', description: 'Learn about common cat care mistakes and how to avoid them.' },
    { icon: 'users', title: 'Connect with Peer Groups', description: 'Join communities with cat owners who purchased similar breeds.' },
    { icon: 'book-open', title: 'Share Your Adoption Story', description: 'Tell your experience securely with customized comments and tips.' },
    { icon: 'map-marker-alt', title: 'Find Nearby Cat Owners', description: 'Discover cat owners in your locality who have similar pets.' },
    { icon: 'comment-alt', title: '24/7 Chatbot Assistance', description: 'Get instant help for adoption, shopping, and cat care anytime.' }
  ];
  
}
