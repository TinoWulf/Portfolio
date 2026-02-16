import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';


@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', './banner.component.mediaquarry.scss'],
})
export class Banner {
  constructor(public translation: TranslationService) {}
}
