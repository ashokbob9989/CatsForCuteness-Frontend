import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn = false;
  isSignupDisabled = false;
  userMenuOpen = false;

  constructor(private eRef: ElementRef) {}

  @Output() signupEvent = new EventEmitter<void>();
  @Output() loginEvent = new EventEmitter<void>();

  openSignup() {
    this.isSignupDisabled = true;
    this.signupEvent.emit();
  }

  openLogin() {
    this.isLoggedIn = true;
    this.loginEvent.emit();
  }

  logout() {
    this.isLoggedIn = false;
    this.isSignupDisabled = false;
    this.userMenuOpen = false;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  /** Close dropdown when clicking outside */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.userMenuOpen = false;
    }
  }
}
