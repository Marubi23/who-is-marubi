import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  typedText = '';
  private fullText = 'initializing about_me.sh ...';
  private index = 0;
  private cardIndex = 0;

  ngOnInit(): void {
    this.typeText();
    this.autoRotateCards();
  }

  private typeText() {
    if (this.index < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 80);
    }
  }

  private autoRotateCards() {
    const cards = document.querySelectorAll('.card');
    if (!cards.length) return;

    cards[this.cardIndex].classList.add('active');

    setInterval(() => {
      cards[this.cardIndex].classList.remove('active');
      this.cardIndex = (this.cardIndex + 1) % cards.length;
      cards[this.cardIndex].classList.add('active');
    }, 3500);
  }
}
