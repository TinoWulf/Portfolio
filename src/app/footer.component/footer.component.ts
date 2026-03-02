import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.services';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.component.mediaquarry.scss'],
})
export class Footer {
  constructor(public translation: TranslationService) {}
}
