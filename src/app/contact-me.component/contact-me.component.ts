import { Component } from '@angular/core';
import { ContactSheet } from './contact-sheet.component/contact-sheet.component';
import { TranslationService } from '../services/translation.services';


@Component({
  selector: 'app-contact-me',
  imports: [ContactSheet],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMe {
  constructor(public translation: TranslationService) {}
}
