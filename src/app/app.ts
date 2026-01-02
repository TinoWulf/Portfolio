import { Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { ContactMe } from './contact-me/contact-me';
import { PortfolioSection } from './portfolio-section/portfolio-section';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [Hero, AboutMe, ContactMe, PortfolioSection, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
