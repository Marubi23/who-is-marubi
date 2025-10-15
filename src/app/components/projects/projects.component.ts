import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  tools?: string[];
  year?: number;
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'VarsityHub',
      description: 'Centralized student collaboration system with real-time cloud-based workflows.',
      tools: ['Angular', 'Node.js', 'MongoDB'],
      year: 2025,
      link: 'https://varsityhub.netlify.app'
    },
    {
      name: 'Minds That Matter',
      description: 'Accessible learning platform powered by AI-driven student engagement.',
      tools: ['React', 'Express', 'MongoDB'],
      year: 2025,
      link: 'https://mindsthatmatter.netlify.app'
    },
    {
      name: 'Cyber Ops Toolkit',
      description: 'A curated suite of ethical hacking tools and automation scripts for red teaming.',
      tools: ['Kali Linux', 'Python', 'Bash'],
      year: 2025,
      link: 'https://cyberopstoolkit.example.com'
    }
  ];

  modalOpen = false;
  selectedProject: Project | null = null;

  openDetails(project: Project) {
    this.selectedProject = project;
    this.modalOpen = true;
  }

  closeDetails() {
    this.modalOpen = false;
    this.selectedProject = null;
  }

  openProjectLink() {
    if (this.selectedProject?.link) {
      window.open(this.selectedProject.link, '_blank');
    }
  }
}
