import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';


@Component({
  selector: 'app-skill-box',
  imports: [],
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss', './skill-box.component.mediaquarry.scss'],
})
export class SkillBox {
  constructor(public translation: TranslationService) {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
