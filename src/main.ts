import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1);
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
