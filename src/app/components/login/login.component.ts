import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email='';
  password='';

  @Output() close=new EventEmitter<void>();
  @Output() switchToSignupEvent=new EventEmitter<void>();

  onLogin(){
    console.log('Login Date:', this.email, this.password);
    this.close.emit();
  }

  switchToSignup(){
    this.switchToSignupEvent.emit();
  }
}
