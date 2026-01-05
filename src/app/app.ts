import { Component, signal } from '@angular/core';
import { Hero } from './hero.component/hero.component';
import { AboutMe } from './about-me.component/about-me.component';
import { ContactMe } from './contact-me.component/contact-me.component';
import { Projects } from './projects.component/projects.component';
import { Skills } from './skills.component/skills.component';
import { Footer } from './footer.component/footer.component';

@Component({
  selector: 'app-root',
  imports: [Hero, AboutMe, ContactMe, Projects, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
