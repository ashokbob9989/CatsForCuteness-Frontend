import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  fullName='';
  email='';
  password='';

  @Output() close=new EventEmitter<void>();
  @Output() switchToLoginEvent=new EventEmitter<void>();

  onSignup(){
    console.log('Signup Date:', this.fullName, this.email, this.password);
    this.close.emit();
  }

  switchToLogin(){
    this.switchToLoginEvent.emit();
  }
}
