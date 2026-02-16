import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';


@Component({
  selector: 'app-short-profile',
  imports: [],
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.scss', './short-profile.component.mediaquarry.scss'],
})
export class ShortProfile {
    constructor(public translation: TranslationService) {}

}
