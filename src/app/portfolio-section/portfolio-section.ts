import { Component } from '@angular/core';
import { ProjectTable } from './project-table/project-table';

@Component({
  selector: 'app-portfolio-section',
  imports: [ProjectTable],
  templateUrl: './portfolio-section.html',
  styleUrl: './portfolio-section.scss',
})
export class PortfolioSection {

}
