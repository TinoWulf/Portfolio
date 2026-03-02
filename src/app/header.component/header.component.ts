import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.services';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.mediaquarry.scss'],
})
export class Header implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  currentLang: 'en' | 'de' = 'en';
  private languageSubscription?: Subscription;

  constructor(public translation: TranslationService, private router: Router) {}

  ngOnInit(): void {
    this.languageSubscription = this.translation.language$.subscribe((language) => {
      this.currentLang = language;
    });
  }

  setLanguage(language: 'en' | 'de'): void {
    this.translation.setLanguage(language);
    this.currentLang = this.translation.getLanguage();
  }

  toggleLanguage(): void {
    this.translation.toggleLanguage();
    this.currentLang = this.translation.getLanguage();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  goHome() {
    this.closeMobileMenu();
    window.location.href = 'https://www.tinowulf.de';
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }
}
