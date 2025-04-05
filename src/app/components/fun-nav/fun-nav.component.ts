import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Meme {
  title: string;
  text: string;
  emoji: string;
}

interface ForumPost {
  question: string;
  replies: string[];
}

interface Blog {
  title: string;
  author: string;
  content: string;
  tags: string[];
}

interface ExpertTip {
  title: string;
  description: string;
  contact: string;
}

@Component({
  selector: 'app-fun-nav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fun-nav.component.html',
  styleUrls: ['./fun-nav.component.scss']
})
export class FunNavComponent {
  memes: Meme[] = [
    { title: 'Keyboard Guardian 😼', text: 'When your cat guards your keyboard like it’s the throne 🖥️', emoji: '👑🐾' },
    { title: 'Zoomies Time 🚀', text: 'At 3AM, I become... The Flash!', emoji: '😹💨🕒' },
    { title: 'Food Inspector 🥡', text: 'Your cat checking if the food is *exactly* like yesterday.', emoji: '👀🍽️' },
    { title: 'Laundry King 👑', text: 'When your fresh laundry becomes a royal bed.', emoji: '🧺😼' },
    { title: 'The Vanishing Act ✨', text: 'One minute she’s here, next minute she’s inside the drawer.', emoji: '🎩🐈' }
  ];

  forumPosts: ForumPost[] = [
    {
      question: 'Why does my cat stare at me while knocking things off?',
      replies: ['Because you dared to ignore them.', 'It’s cat law.']
    },
    {
      question: 'Best litter box for small apartments?',
      replies: ['Try top-entry boxes.', 'Self-cleaning ones are game changers!']
    },
    {
      question: 'How do I introduce my new cat to my dog?',
      replies: [
        'Keep them separated at first and let them smell each other through a door.',
        'Use treats to reward calm behavior.'
      ]
    },
    {
      question: 'My cat sleeps *on* my face. Help?',
      replies: [
        'You’ve been chosen. Accept it.',
        'Try a heated cat bed — they love warmth.'
      ]
    }
  ];

  blogs: Blog[] = [
    {
      title: 'How My Cat Became My Therapist 💖',
      author: 'Jenna P.',
      content: 'During lockdown, I felt isolated... but my cat Luna was my anchor. She sensed when I was low and purred herself onto my lap. Cats are more than pets — they’re emotional support ninjas.',
      tags: ['emotional', 'bond', 'mental health']
    },
    {
      title: '5 Things I Learned Fostering 10 Cats 🏡',
      author: 'Reema D.',
      content: 'Every cat is different. Some love cuddles, some love chaos. But all need patience and a comfy space. Fostering made me more compassionate and surprisingly organized!',
      tags: ['fostering', 'experience']
    },
    {
      title: 'My Cat Runs a Secret Mafia 😼',
      author: 'Arjun M.',
      content: 'Every morning, three neighbor cats come to my porch. My cat leads them like a boss, then demands extra snacks. Coincidence? I think not.',
      tags: ['funny', 'outdoor', 'territory']
    },
    {
      title: 'Teaching My Cat to High-Five ✋',
      author: 'Tina S.',
      content: 'Using treats and clicker training, I taught Snowflake to high-five. Now she does it every time she wants food... which is all the time.',
      tags: ['training', 'tricks']
    }
  ];

  expertTips: ExpertTip[] = [
    {
      title: 'How to Handle Separation Anxiety in Cats 🐾',
      description: 'Many cats suffer stress when left alone. Enrich their environment, use interactive toys, and stick to routines. If severe, consult a vet for behavioral therapy.',
      contact: 'dr.meowcare@catclinic.com'
    },
    {
      title: 'Nutrition Tips for Indoor Cats 🍗',
      description: 'Indoor cats have different needs. Choose high-protein, low-carb food, and keep them active. Schedule regular weight checks.',
      contact: 'nutrition.expert@cathealth.org'
    },
    {
      title: 'Dealing with Aggressive Play 🧤',
      description: 'Avoid using your hands as toys. Redirect with wand toys and stop play if they bite too hard.',
      contact: 'trainer.jules@playtame.com'
    },
    {
      title: 'Importance of Regular Vet Visits 🩺',
      description: 'Cats hide pain well. Annual checkups, dental cleanings, and vaccine updates are essential for long-term health.',
      contact: 'dr.luna@vetandco.org'
    }
  ];
}
