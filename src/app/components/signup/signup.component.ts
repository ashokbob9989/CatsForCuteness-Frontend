import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  fullName='';
  email='';
  password='';
  errorMessage='';

  constructor(private userService: UserService){}

  @Output() close=new EventEmitter<void>();
  @Output() switchToLoginEvent=new EventEmitter<void>();

  onSignup() {
    const user: User = {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    };
    this.userService.register(user).subscribe({
      next: (response) => {
        console.log(response); 
        this.close.emit();
      },
      error: (err) => {
        console.error('Signup failed:', err);
        if (err.status === 409 && err.error.message === 'User already exists') {
          this.errorMessage = 'User already exists. Please use a different email.';
        } else {
          this.errorMessage = 'Signup failed. Please try again.';
        }
      }
    });
  }

  switchToLogin(){
    this.switchToLoginEvent.emit();
  }
}
