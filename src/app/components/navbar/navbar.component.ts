import { Component, ElementRef, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userMenuOpen = false;
  isSignupDisabled = false;
  isNavOpen = false; // Tracks the state of the navbar for smaller screens

  constructor(private eRef: ElementRef) {}

  @Output() signupEvent = new EventEmitter<void>();
  @Output() loginEvent = new EventEmitter<void>();

  ngOnInit() {
    this.checkLoginStatus(); 
  }

  openSignup() {
    this.isSignupDisabled = true;
    this.signupEvent.emit();
  }

  openLogin() {
    this.loginEvent.emit();
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', 'true');
    }
    this.isLoggedIn = true;
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    this.isLoggedIn = false;
    this.userMenuOpen = false;
    this.isSignupDisabled = false; // Reset signup button state
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggles the navbar visibility
  }

  checkLoginStatus() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('user');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.userMenuOpen = false;
    }
  }
}