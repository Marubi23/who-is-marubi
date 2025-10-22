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
    { name: 'VarsityHub', description: 'An E-commerce site that provides a platform for young sellers to showcase their products on a local area.', tools: ['Angular','Node.js','MongoDB'], year: 2025, link: 'https://kyuvarsityhub.netlify.app' },
    { name: 'Minds That Matter', description: 'Accessible learning platform powered by AI-driven engagement.', tools: ['React','Express','MongoDB'], year: 2025, link: 'https://mindsthatmatter.netlify.app' },
    { name: 'ByteLab', description: 'ByteLabs is a hands-on cybersecurity learning platform that provides practical labs, guided mentorship, and global community support for aspiring ethical hackers and IT security enthusiasts', tools: ['Angular','Bootstrap','Nelify(rendering)'], year: 2025, link: 'https://marubilabs.netlify.app/' },
    { name: 'MindsBridge', description: 'MindsBridge is a platform built to aid learning support and psychiatrist help regardless of the situation.A key feature to boost education systems in Kenya', tools: ['Angular','Bootstrap','Render(rendering)'], year: 2025, link: 'https://mindbridge-avg7.onrender.com/' }
  ];

  modalOpen = false;
  selectedProject: Project | null = null;
  logLines: string[] = [];
  projectLogs: string[] = [];
  isLoading = false;

  constructor() {
    this.initializeLogs();
  }

  initializeLogs() {
    const bootLogs = [
      'Fetching project repository...',
      'Loading project index',
      `Detected ${this.projects.length} projects...`,
      'Projects ready. Awaiting selection.'
    ];
    this.logLines = [];
    let i = 0;
    const interval = setInterval(() => {
      if(i < bootLogs.length) {
        this.logLines.push(bootLogs[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

  openDetails(project: Project) {
    this.selectedProject = project;
    this.modalOpen = true;
    this.isLoading = true;
    this.projectLogs = [];

    const logs = [
      `Accessing project: ${project.name}`,
      `Description: ${project.description}`,
      `Year: ${project.year}`,
      `Tools: ${project.tools?.join(', ')}`,
      'Status: ONLINE',
      'Initializing secure link...'
    ];

    let i = 0;
    const interval = setInterval(() => {
      if(i < logs.length) {
        this.projectLogs.push(logs[i]);
        i++;
      } else {
        this.isLoading = false;
        clearInterval(interval);
      }
    }, 350);
  }

  closeDetails() {
    this.modalOpen = false;
    this.selectedProject = null;
    this.projectLogs = [];
  }

  openProjectLink() {
    if(this.selectedProject?.link){
      window.open(this.selectedProject.link, '_blank');
    }
  }
}
