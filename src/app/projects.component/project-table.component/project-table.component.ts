import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';


@Component({
  selector: 'app-project-table',
  imports: [CommonModule],
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss', './project-table.component.mediaquarry.scss'],
})
export class ProjectTable {

  constructor(public translation: TranslationService) {}

  projects = [
    {
      id: 1,
      key: 'join',
      title: 'Join',
      image: '/assets/img/screenshots/join-portfolio.png',
      liveLink: 'https://tino-wulf.developerakademie.net/Join',
      githubLink: 'https://github.com/TinoWulf/Join',
      techs: [
        { name: 'JavaScript', icon: '/assets/img/icons/turquoise-icon-javascript.png' },
        { name: 'HTML', icon: '/assets/img/icons/turquoise-icon-html.png' },
        { name: 'CSS', icon: '/assets/img/icons/turquoise-icon-css.png' },
        { name: 'Firebase', icon: '/assets/img/icons/turquoise-icon-firebase.png' }
      ],
    },
    {
      id: 2,
      key: 'sharkie',
      title: 'Sharkie',
      image: '/assets/img/screenshots/sharkie-portfolio.png',
      liveLink: 'https://tino-wulf.developerakademie.net/Sharkie/index.html',
      githubLink: 'https://github.com/TinoWulf/Sharkie',
      techs: [
        { name: 'JavaScript', icon: '/assets/img/icons/turquoise-icon-javascript.png' },
        { name: 'HTML', icon: '/assets/img/icons/turquoise-icon-html.png' },
        { name: 'CSS', icon: '/assets/img/icons/turquoise-icon-css.png' }
      ],
    },
    {
      id: 3,
      key: 'pokedex',
      title: 'Pokedex',
      image: '/assets/img/screenshots/pokedex-portfolio.png',
      liveLink: 'https://tino-wulf.developerakademie.net/Pokedex',
      githubLink: 'https://github.com/TinoWulf/Pokedex',
      techs: [
        { name: 'JavaScript', icon: '/assets/img/icons/turquoise-icon-javascript.png' },
        { name: 'HTML', icon: '/assets/img/icons/turquoise-icon-html.png' },
        { name: 'CSS', icon: '/assets/img/icons/turquoise-icon-css.png' },
        { name: 'REST-API', icon: '/assets/img/icons/turquoise-icon-rest-api.png' }
      ],
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

  navigateToProject(url: string) {
    window.open(url, '_blank');
  }

  getActiveProjectImage(): string | undefined {
    const project = this.projects.find(p => p.id === this.activeProject);
    return project?.image;
  }

}
