import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Shelter {
  name: string;
  location: string;
  contact: string;
  status: string;
}

interface Story {
  user: string;
  story: string;
  likes: number;
  comments: string[];
  newComment?: string;
}

@Component({
  selector: 'app-adopt-nav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adopt-nav.component.html',
  styleUrls: ['./adopt-nav.component.scss']
})
export class AdoptNavComponent {
  shelters: Shelter[] = [
    { name: 'Paw Haven', location: 'New York, NY', contact: 'pawh@example.com', status: 'Open' },
    { name: 'Meow Rescue', location: 'Austin, TX', contact: 'meow@example.com', status: 'Temporarily Closed' },
    { name: 'Furry Friends Home', location: 'Seattle, WA', contact: 'furry@example.com', status: 'Open' }
  ];

  stories: Story[] = [
    {
      user: 'Lily & Mittens 🐾',
      story: 'We adopted Mittens last year after she was found abandoned near a construction site. At first, she was scared and hid under the bed for days. With patience and love, she’s now the queen of the house — always curled up on the sofa with us. She even "talks" back when we call her name!',
      likes: 22,
      comments: ['So sweet!', 'Beautiful story!']
    },
    {
      user: 'Jake & Shadow 🐈',
      story: 'Shadow came to us through a rescue center after surviving a tough winter. We didn’t expect to bond so quickly, but within a week, he was sleeping on my chest every night. His purring is now our home’s heartbeat. He loves stealing socks and watching birds from the balcony.',
      likes: 34,
      comments: ['Bless you for adopting!', 'Shadow sounds lovely!']
    },
    {
      user: 'Aisha & Luna 🌙',
      story: 'Luna was barely 3 weeks old when we adopted her. She was fragile and sickly, and it was touch and go for a while. We bottle-fed her, kept her warm, and prayed. Now, a year later, she’s a vibrant, playful ball of energy who zooms through the house at 2AM. She’s our miracle.',
      likes: 48,
      comments: ['Truly a miracle baby!', 'So happy to hear she’s well!']
    },
    {
      user: 'Carlos & Whiskers 😺',
      story: 'Whiskers was rescued from a hoarding situation and came with emotional scars. It took time, but now he greets us at the door and insists on morning cuddles. He’s a gentle soul and even became best friends with our dog. Seeing him heal has been one of the most beautiful experiences.',
      likes: 29,
      comments: ['Whiskers is brave!', 'Love this friendship!']
    },
    {
      user: 'Emily & Pumpkin 🎃',
      story: 'We found Pumpkin wandering alone during Halloween. She was covered in dirt and trembling from fear. We took her in, cleaned her up, and gave her a warm bed. Now she’s the family favorite — always curling up with us and stealing treats. She also loves riding in the car!',
      likes: 51,
      comments: ['Pumpkin is adorable!', 'Such a lucky kitty!']
    },
    {
      user: 'Sophie & Biscuit 🍪',
      story: 'Biscuit was a shy, underweight kitten with big, scared eyes. We gave him a calm space, a soft bed, and lots of love. Today, he’s a chonky lovebug who hogs the bed and follows us from room to room. He has brought so much comfort, especially during tough days.',
      likes: 62,
      comments: ['Aww, Biscuit sounds so sweet!', 'What a transformation!']
    }
  ];  

  likeStory(index: number) {
    this.stories[index].likes++;
  }

  addComment(index: number) {
    const newComment = this.stories[index].newComment?.trim();
    if (newComment) {
      this.stories[index].comments.push(newComment);
      this.stories[index].newComment = '';
    }
  }
}
