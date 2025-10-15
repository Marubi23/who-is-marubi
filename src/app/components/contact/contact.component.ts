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
  activeTab: 'email' | 'github' | 'linkedin' | null = null;
  name = '';
  email = '';
  message = '';
  submitted = false;

  toggleTab(tab: 'email' | 'github' | 'linkedin') {
    this.activeTab = this.activeTab === tab ? null : tab;
  }

  sendMessage() {
    if (!this.name || !this.email || !this.message) return;

    // Integrate backend or email service here
    console.log('Message sent', { name: this.name, email: this.email, message: this.message });

    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.name = '';
      this.email = '';
      this.message = '';
    }, 3000);
  }
}
