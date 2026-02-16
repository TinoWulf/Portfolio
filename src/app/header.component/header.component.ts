import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.mediaquarry.scss'],
})
export class Header {
  currentLang: 'de' | 'en' = 'de';
  mobileMenuOpen = false;

  constructor(public translation: TranslationService) {
    this.translation.language$.subscribe(lang => this.currentLang = lang);
  }

  toggleLanguage() {
    this.translation.toggleLanguage();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
