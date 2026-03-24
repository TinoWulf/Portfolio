import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Header } from './header.component/header.component';
import { Footer } from './footer.component/footer.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('portfolio');
  private readonly subscriptions = new Subscription();
  private readonly scrollTimeouts: number[] = [];

  constructor(
    private readonly router: Router,
    private readonly viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const routerEventsSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        const routePath = this.router.url.split('?')[0].split('#')[0];

        if (routePath === '/policy') {
          this.forceScrollTopWithRetries();
        }
      });

    this.subscriptions.add(routerEventsSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scrollTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }

  private forceScrollTopWithRetries(): void {
    this.forceScrollTop();

    [0, 80, 250].forEach((delay) => {
      const timeoutId = window.setTimeout(() => this.forceScrollTop(), delay);
      this.scrollTimeouts.push(timeoutId);
    });
  }

  private forceScrollTop(): void {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }

    this.viewportScroller.scrollToPosition([0, 0]);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
