import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type EditableField = 'name' | 'username' | 'email' | 'phone';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    fullName: 'Luna Whiskers',
    username: 'luna_catlover',
    email: 'luna@example.com',
    phone: '+91 9876543210',
    address: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      pincode: '560001'
    }
  };

  totalOrders = 7;

  editMode = {
    name: false,
    username: false,
    email: false,
    phone: false
  };


  toggleEdit(field: EditableField): void {
    this.editMode[field] = !this.editMode[field];
  }
  

  resetPassword() {
    alert('A password reset link has been sent to your registered email.');
  }

  setDefaultAddress() {
    alert('This address is now your default address.');
  }

  addAddress() {
    alert('Redirecting to add a new address...');
  }
}
