import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.revealOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.revealOnScroll();
  }

  revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-up');
    reveals.forEach((el: any) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}
