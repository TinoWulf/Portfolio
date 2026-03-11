import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.services';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.component.mediaquarry.scss'],
})
export class Footer {
  constructor(public translation: TranslationService) {}
}
