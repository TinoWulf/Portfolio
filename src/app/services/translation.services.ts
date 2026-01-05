import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private languageSubject = new BehaviorSubject<'de' | 'en'>('de');
    language$ = this.languageSubject.asObservable();

    private translations = {
        de: {
            HEADER: { ABOUTME: 'Über mich', SKILLS: 'Fähigkeiten', PROJECTS: 'Projekte' },
            BUTTON: { CLICK_ME: 'Klick mich' },
        },
        en: {
            HEADER: { ABOUTME: 'About me', SKILLS: 'Skills', PROJECTS: 'Projects' },
            BUTTON: { CLICK_ME: 'Click me' },
        }
    };

    // change language
    toggleLanguage() {
        const newLang = this.languageSubject.value === 'de' ? 'en' : 'de';
        this.languageSubject.next(newLang);
    }

    // Get translation
    translate(path: string): string {
        const lang = this.languageSubject.value;
        return path.split('.').reduce((obj: any, key) => obj?.[key], this.translations[lang]) || path;
    }
}