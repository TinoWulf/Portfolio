import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';


@Component({
  selector: 'app-short-profile',
  imports: [],
  templateUrl: './short-profile.component.html',
  styleUrl: './short-profile.component.scss',
})
export class ShortProfile {
    constructor(public translation: TranslationService) {}

}
