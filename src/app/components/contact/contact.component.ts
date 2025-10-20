import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  activeTab: 'email' | 'github' | 'linkedin' | 'whatsapp' | null = null;
  submitted = false;

  name = '';
  email = '';
  message = '';

  toggleTab(tab: 'email' | 'github' | 'linkedin' | 'whatsapp') {
    this.activeTab = tab;
    this.submitted = false;
  }

  sendMessage() {
    if (!this.name || !this.email || !this.message) return;

    // Replace with your backend or email service integration
    console.log('Message sent:', { name: this.name, email: this.email, message: this.message });
    this.submitted = true;

    // Reset form after 3 seconds
    setTimeout(() => {
      this.name = '';
      this.email = '';
      this.message = '';
      this.submitted = false;
      this.activeTab = null;
    }, 3000);
  }

  openWhatsApp() {
    window.open('https://wa.me/25412683708', '_blank');
  }
}
