import { Component } from '@angular/core';
import { ShortProfile } from './short-profile.component/short-profile.component';
import { TranslationService } from '../services/translation.services';


@Component({
  selector: 'app-about-me',
  imports: [ShortProfile],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMe {
  constructor(public translation: TranslationService) {}
}
