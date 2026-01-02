import { Component } from '@angular/core';
import { SkillBox } from './skill-box/skill-box';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBox, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
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
    { name: 'Scrum', src: 'scrum' },
    { name: 'Growth Mindset', src: 'mindset' },
  ]
}
