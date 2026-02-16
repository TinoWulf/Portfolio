import { Component } from '@angular/core';
import { SkillBox } from './skill-box.component/skill-box.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.services';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBox, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills.component.mediaquarry.scss'],
})
export class Skills {
    constructor(public translation: TranslationService) {}
  
  skills = [
    { name: 'HTML', src: 'html' },
    { name: 'CSS', src: 'css' },
    { name: 'JavaScript', src: 'javascript' },
    { name: 'Material Design', src: 'material-design' },
    { name: 'TypeScript', src: 'typescript' },
    { name: 'Angular', src: 'angular' },
    { name: 'Firebase', src: 'firebase' },
    { name: 'Git', src: 'git-skill-icon' },
    { name: 'REST-API', src: 'rest-api' },
    { name: 'Scrum', src: 'scrum' }
  ]
}
