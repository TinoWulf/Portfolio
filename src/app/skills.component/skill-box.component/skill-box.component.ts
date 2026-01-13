import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';


@Component({
  selector: 'app-skill-box',
  imports: [],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.scss',
})
export class SkillBox {
  constructor(public translation: TranslationService) { }
}
