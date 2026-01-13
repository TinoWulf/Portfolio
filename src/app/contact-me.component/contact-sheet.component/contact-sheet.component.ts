import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';

@Component({
  selector: 'app-contact-sheet',
  imports: [],
  templateUrl: './contact-sheet.component.html',
  styleUrl: './contact-sheet.component.scss',
})
export class ContactSheet {
  constructor(public translation: TranslationService) {}
}
