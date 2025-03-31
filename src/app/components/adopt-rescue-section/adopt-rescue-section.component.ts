import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adopt-rescue-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adopt-rescue-section.component.html',
  styleUrls: ['./adopt-rescue-section.component.scss']
})
export class AdoptRescueSectionComponent {
  adoptOptions = [
    { icon: 'bi bi-house-heart', title: 'Find Shelters & Rescues', description: 'Discover trusted adoption centers and shelters near you.', link: '/adopt/shelters' },
    { icon: 'bi bi-chat-heart', title: 'Success Stories', description: 'Read heartwarming stories of cats finding their forever homes.', link: '/adopt/success-stories' },
    { icon: 'bi bi-search-heart', title: 'Adopt by Preferences', description: 'Filter adoptions by breed, age, and temperament.', link: '/adopt/filter' },
    { icon: 'bi bi-people', title: 'Community Support', description: 'Connect with adopters and share your journey.', link: '/community/forums' }
  ];
}
