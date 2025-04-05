import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-care',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './care-nav.component.html',
  styleUrls: ['./care-nav.component.scss']
})
export class CareNavComponent {
  behaviors = [
    { behavior: 'Purring', meaning: 'Usually indicates contentment, but can also be self-soothing during stress or pain.' },
    { behavior: 'Kneading', meaning: 'A sign of comfort, often associated with kittenhood.' },
    { behavior: 'Hissing', meaning: 'Fear or defense; indicates discomfort with a situation or person.' },
    { behavior: 'Slow Blinking', meaning: 'Trust and affection. Try slow blinking back!' },
    { behavior: 'Head Butting', meaning: 'Affection and territory marking.' },
    { behavior: 'Excessive Grooming', meaning: 'May signal anxiety, allergies, or skin irritation.' },
    { behavior: 'Tail Twitching', meaning: 'Excitement, irritation, or hunting mode.' }
  ];

  beginnerMistakes = [
    {
      mistake: 'Feeding cow milk',
      solution: 'Adult cats are lactose intolerant. Provide clean water and vet-approved cat food only.'
    },
    {
      mistake: 'Not neutering/spaying the cat',
      solution: 'Unspayed females can go into heat often; males may mark territory. Always spay/neuter unless breeding.'
    },
    {
      mistake: 'Using dog products on cats',
      solution: 'Never use dog shampoos or meds on cats. They have different needs and sensitivities.'
    },
    {
      mistake: 'Declawing',
      solution: 'Declawing is painful and affects their balance. Use scratchers and trimming instead.'
    },
    {
      mistake: 'Ignoring hairballs',
      solution: 'Frequent grooming and special hairball control food can help.'
    }
  ];

  sexualHealthTips = [
    'Spay or neuter your cat by 5-6 months to avoid behavioral and health issues.',
    'Mating behavior in cats includes loud vocalizations and restlessness.',
    'Avoid breeding unless you have proper knowledge and space.',
    'Watch for signs of urinary infections or discharge – visit a vet if seen.'
  ];

  selfCareTips = [
    'Cats are clean animals. Keep their litter box clean daily.',
    'Brush long-haired cats daily to prevent mats.',
    'Trim nails every 2–3 weeks.',
    'Check ears, eyes, and teeth regularly.'
  ];

  catFeelings = [
    { feeling: 'Happy', cue: 'Purring, slow blinking, relaxed posture' },
    { feeling: 'Anxious', cue: 'Hiding, excessive grooming, tail tucked' },
    { feeling: 'Angry', cue: 'Hissing, swatting, ears flattened' },
    { feeling: 'Playful', cue: 'Dilated pupils, pouncing, running' },
    { feeling: 'Affectionate', cue: 'Head butts, following you, meowing softly' },
    { feeling: 'Scared', cue: 'Crouching low, wide eyes, sudden dashes' },
    { feeling: 'Bored', cue: 'Destructive behavior, excessive sleeping, attention-seeking' },
    { feeling: 'Sick or in pain', cue: 'Lethargy, hiding, loss of appetite, vocal discomfort' }
  ];
}
