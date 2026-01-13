import { Component } from '@angular/core';
import { ProjectTable } from './project-table.component/project-table.component';
import { TranslationService } from '../services/translation.services';

@Component({
  selector: 'app-projects',
  imports: [ProjectTable],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class Projects {
  constructor(public translation: TranslationService) {}
  activeProject = 0;

}
