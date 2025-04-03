import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService) { }

  @Output() close = new EventEmitter<void>();
  @Output() switchToSignupEvent = new EventEmitter<void>();

  onLogin() {
    this.userService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.user)); // Store user details in localStorage
        this.close.emit(); // Close the login form
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid email or password'; // Display error message
      }
    });
  }

  switchToSignup() {
    this.switchToSignupEvent.emit();
  }
}
