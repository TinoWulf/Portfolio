import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../app/services/translation.services';

@Component({
  selector: 'app-policy',
  imports: [RouterModule],
  templateUrl: './policy.page.html',
  styleUrl: './policy.page.scss'
})
export class PolicyPage {
  constructor(public translation: TranslationService) {}

  t(path: string) {
    return this.translation.translate(path);
  }
}
