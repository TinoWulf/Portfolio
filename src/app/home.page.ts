import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { Hero } from './hero.component/hero.component';
import { AboutMe } from './about-me.component/about-me.component';
import { ContactMe } from './contact-me.component/contact-me.component';
import { Projects } from './projects.component/projects.component';
import { Skills } from './skills.component/skills.component';
import { initScrollReveal } from './utils/scroll-reveal';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, ContactMe, Projects, Skills],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private cleanupReveal: () => void = () => {};

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.cleanupReveal = initScrollReveal();
  }

  ngOnDestroy(): void {
    this.cleanupReveal();
  }
}
