import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { ContactMe } from './contact-me/contact-me';
import { PortfolioSection } from './portfolio-section/portfolio-section';
import { References } from './references/references';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, AboutMe, ContactMe, PortfolioSection, References, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
