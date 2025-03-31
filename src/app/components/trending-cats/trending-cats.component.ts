import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending-cats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-cats.component.html',
  styleUrl: './trending-cats.component.scss'
})
export class TrendingCatsComponent {
  trendingCats = [
    { 
      name: 'Maine Coon', 
      image: 'maine-coon.jpg', 
      type: 'Fluffy & Gentle Giant', 
      description: 'One of the largest domesticated cat breeds, known for its thick fur, friendly nature, and intelligence. Ideal for families and cold climates.' 
    },
    { 
      name: 'Siamese', 
      image: 'siamese.jpeg', 
      type: 'Playful & Talkative', 
      description: 'Famous for their striking blue eyes and vocal personality. They love human interaction and are highly social and intelligent.' 
    },
    { 
      name: 'British Shorthair', 
      image: 'british-short-hair.jpeg', 
      type: 'Calm & Independent', 
      description: 'A relaxed and dignified breed with a plush coat and round face. They are affectionate but also enjoy their personal space.' 
    },
    { 
      name: 'Bengal', 
      image: 'bengal.jpeg', 
      type: 'Energetic & Adventurous', 
      description: 'Bred from wild cats, Bengals have striking rosetted coats and are highly active. They love climbing and playing in water.' 
    },
    { 
      name: 'Persian', 
      image: 'persian.jpeg', 
      type: 'Elegant & Quiet', 
      description: 'With their luxurious long fur and calm demeanor, Persians are perfect lap cats who enjoy a peaceful home environment.' 
    },
    { 
      name: 'Scottish Fold', 
      image: 'scottish-fold.jpeg', 
      type: 'Cute & Affectionate', 
      description: 'Recognizable by their unique folded ears, Scottish Folds are sweet-natured, friendly, and love to snuggle with their owners.' 
    }
  ];

}
