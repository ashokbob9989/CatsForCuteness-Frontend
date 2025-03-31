import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {
  
  @ViewChild('heroVideo', { static: false }) heroVideo!: ElementRef<HTMLVideoElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Ensure ViewChild has been initialized
    if (!this.heroVideo || !this.heroVideo.nativeElement) {
      console.error('Video element not found');
      return;
    }

    const video = this.heroVideo.nativeElement;
    
    // Ensure the video is muted for autoplay to work
    video.muted = true;
    video.setAttribute('playsinline', 'true');

    // Wait for metadata to load before trying to play
    this.renderer.listen(video, 'loadedmetadata', () => {
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    });

    // When video ends, pause instead of hiding
    this.renderer.listen(video, 'ended', () => {
      video.pause();
    });
  }
}
