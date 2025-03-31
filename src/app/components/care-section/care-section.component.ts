import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-care',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './care-section.component.html',
  styleUrls: ['./care-section.component.scss']
})
export class CareSectionComponent {
  careTopics = [
    {
      title: 'Nutrition & Diet',
      description: 'Ensure your cat gets the right nutrients for a healthy life.',
      image: 'assets/nutrition.jpeg',
      link: '/care/nutrition'
    },
    {
      title: 'Grooming & Hygiene',
      description: 'Tips on keeping your cat clean, happy, and comfortable.',
      image: 'assets/grooming.jpeg',
      link: '/care/grooming'
    },
    {
      title: 'Health & Wellness',
      description: 'Recognizing signs of illness and maintaining regular checkups.',
      image: 'assets/health.jpeg',
      link: '/care/health'
    },
    {
      title: 'Training & Behavior',
      description: 'Understanding cat behavior and effective training methods.',
      image: 'assets/training.jpeg',
      link: '/care/training'
    }
  ];
}
