import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.services';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class Header {
  currentLang: 'de' | 'en' = 'de';

  constructor(public translation: TranslationService) {
    this.translation.language$.subscribe(lang => this.currentLang = lang);
  }

  toggleLanguage() {
    this.translation.toggleLanguage();
  }
}
