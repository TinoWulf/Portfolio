import { Component, Inject, OnDestroy, OnInit, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../app/services/translation.services';

@Component({
  selector: 'app-imprint',
  imports: [RouterModule],
  templateUrl: './imprint.page.html',
  styleUrl: './imprint.page.scss'
})
export class ImprintPage implements OnInit, AfterViewInit, OnDestroy {
  private readonly scrollTimeouts: number[] = [];

  constructor(
    public translation: TranslationService,
    private readonly viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngOnInit(): void {
    this.forceScrollTop();
  }

  ngAfterViewInit(): void {
    this.forceScrollTop();
    this.scheduleScrollTop(0);
    this.scheduleScrollTop(80);
    this.scheduleScrollTop(250);
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scrollTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }

  private scheduleScrollTop(delay: number): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const timeoutId = window.setTimeout(() => this.forceScrollTop(), delay);
    this.scrollTimeouts.push(timeoutId);
  }

  private forceScrollTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  t(path: string) {
    return this.translation.translate(path);
  }
}
