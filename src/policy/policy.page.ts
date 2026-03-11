import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslationService } from '../app/services/translation.services';

@Component({
  selector: 'app-policy',
  imports: [RouterModule],
  templateUrl: './policy.page.html',
  styleUrl: './policy.page.scss'
})
export class PolicyPage implements OnInit {
  constructor(
    public translation: TranslationService,
    private readonly viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  t(path: string) {
    return this.translation.translate(path);
  }
}
