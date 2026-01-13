import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-project-table',
  imports: [CommonModule],
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.scss',
})
export class ProjectTable {
  
  projects = [
    {
      id: 1,
      key: 'join',
      title: 'Join',
      image: '/assets/img/screenshots/join-portfolio.png',
      techs: ['JavaScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      id: 2,
      key: 'sharkie',
      title: 'Sharkie',
      image: '/assets/img/screenshots/sharkie-portfolio.png',
      techs: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 3,
      key: 'pokedex',
      title: 'Pokedex',
      image: '/assets/img/screenshots/pokedex-portfolio.png',
      techs: ['JavaScript', 'HTML', 'CSS', 'REST-API']
    }
  ];

  activeProject: number | null = null;
  selectedIndex: number | null = null;
  isOverlayOpen = false;
  Math: any;
  middleIndex = Math.floor(this.projects.length / 2);

  openOverlay(index: number) {
    this.selectedIndex = index;
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }

  next() {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
  }

  prev() {
    if (this.selectedIndex === null) return;
    this.selectedIndex =
      (this.selectedIndex! - 1 + this.projects.length) % this.projects.length;
  }


}
