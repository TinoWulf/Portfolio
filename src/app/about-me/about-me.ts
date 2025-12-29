import { Component } from '@angular/core';
import { ShortProfile } from './short-profile/short-profile';

@Component({
  selector: 'app-about-me',
  imports: [ShortProfile],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

}
