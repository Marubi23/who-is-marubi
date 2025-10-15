import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AboutComponent {
  @ViewChild('chatSection') chatSection!: ElementRef;

  lines: string[] = [
    'Accessing Marubi Secure File...',
    'Decrypting profile information...',
    'Initializing personal file...',
    'Loading skills and operations...',
  ];
  currentLine = '';
  aboutText: string[] = [];
  isLoaded = false;
  responses: { input: string; output: string }[] = [];
  command = '';
  prompt = 'marubyte@digital:~$';

  ngOnInit() {
    this.simulateBoot();
  }

  /** Boot animation */
  simulateBoot() {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.lines.length) {
        this.currentLine = this.lines[index];
        index++;
      } else {
        clearInterval(interval);
        this.currentLine = '';
        this.loadAbout();
      }
    }, 900);
  }

  /** Load About Case File */
  loadAbout() {
    this.isLoaded = true;
    this.aboutText = [
      'Alias: Marubyte',
      'Occupation: Cybersecurity Researcher & Full-Stack Developer',
      'Specialty: OSINT, Ethical Hacking, AI-assisted Systems',
      'Mission Statement: Secure digital ecosystems while innovating creative tech solutions.',
    ];
  }

  /** Smooth scroll to chat */
  scrollToChat() {
    if (this.chatSection && this.chatSection.nativeElement) {
      this.chatSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /** Command handler */
  executeCommand() {
    if (!this.command.trim()) return;

    const input = this.command.trim().toLowerCase();
    let output = '';

    switch (input) {
      case 'help':
        output = 'Commands: help, skills, contact, clear';
        break;
      case 'skills':
        output = 'Cybersecurity, Full-Stack Development, Creative Logic';
        break;
      case 'contact':
        output = 'Click the "Reach Me Securely" button above to WhatsApp.';
        break;
      case 'clear':
        this.responses = [];
        this.command = '';
        return;
      default:
        output = `Command not recognized: "${input}". Try "help".`;
    }

    this.responses.push({ input: this.command, output });
    this.command = '';
  }

}
