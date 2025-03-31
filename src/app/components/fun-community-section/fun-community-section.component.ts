import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fun-community-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fun-community-section.component.html',
  styleUrls: ['./fun-community-section.component.scss']
})
export class FunCommunitySectionComponent {
  funFeatures = [
    { icon: 'cat-meme.jpeg', title: 'Cat Memes & Stories', description: 'Enjoy hilarious cat memes and heartwarming stories.', link: '/fun/memes' },
    { icon: 'community-forum.jpeg', title: 'Community Forums', description: 'Discuss everything about cats with fellow enthusiasts.', link: '/community/forums' },
    { icon: 'user-blogs.jpeg', title: 'User Blogs', description: 'Read and share personal cat experiences and tips.', link: '/community/blogs' },
    { icon: 'expert-advice.jpeg', title: 'Expert Advice', description: 'Get guidance from vets and cat behavior experts.', link: '/community/experts' },
    { icon: 'virtual-show.jpeg', title: 'Virtual Cat Shows', description: 'Join online competitions and showcase your cat.', link: '/community/virtual-shows' },
    { icon: 'adoption-stories.jpeg', title: 'Adoption Stories', description: 'Read touching adoption journeys shared by cat lovers.', link: '/community/adoption-stories' }
  ];
  
}
