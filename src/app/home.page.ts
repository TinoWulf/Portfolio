import { Component } from '@angular/core';
import { Hero } from './hero.component/hero.component';
import { AboutMe } from './about-me.component/about-me.component';
import { ContactMe } from './contact-me.component/contact-me.component';
import { Projects } from './projects.component/projects.component';
import { Skills } from './skills.component/skills.component';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, ContactMe, Projects, Skills],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {}
