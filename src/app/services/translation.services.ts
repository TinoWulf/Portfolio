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
            HEADER: {
                ABOUTME: 'Über mich',
                SKILLS: 'Fähigkeiten',
                PROJECTS: 'Projekte'
            },
            BUTTONS: {
                WORKBTN: 'Meine Projecte',
                CONTACTBTN: 'Schreib mir',
            },
            BANNER: {
                LOCATION: 'Wohnhaft in Rostock',
                AVAILABILITY: 'Verfügbar für Homeoffice und Büro',
                WORK: 'Bereit direkt anzufangen'
            },
            ABOUTME: {
                WHOIAM: 'Wer ich bin',
                ABOUTME: 'Über mich',
                INTRODUCTION: 'Hallo meine name ist.. und so weiter, halt einfach irgendwas hier raus',
                BASED: 'Wo befinden Sie sich? Wären Sie bereit, remote zu arbeiten oder gegebenenfalls umzuziehen??',
                MINDSET: 'Zeigen Sie, dass Sie aufgeschlossen sind. Begeistert es Sie, neue Technologien zu erlernen und Ihre Fähigkeiten stetig zu verbessern?',
                DESCRIPTION: 'Eine kurze Beschreibung Ihres Problemlösungsansatzes. Lernen Sie aus jeder Herausforderung, um die effizienteste oder eleganteste Lösung zu finden? Sie können Schlüsselwörter wie analytisches Denken, Kreativität, Beharrlichkeit und Zusammenarbeit einbeziehen.',
            },
            SKILLS: {
                TEC: 'Technologien',
                HEADLINE: 'Fähigkeiten',
                INTRODUCTION: 'Eine kurze Einführung in deine Fähigkeiten. Hebe deine Erfahrung im Umgang mit verschiedenen Frontend-Technologien hervor und betone deine Offenheit, neue Technologien zu lernen und dich anzupassen. Zeige, wie wichtig es dir ist, mit den schnellen Veränderungen in der Webentwicklung Schritt zu halten.',
                QUESTION1: 'Du suchst',
                QUESTION2: 'weitere Fähigkeiten?',
                REQUEST: 'Kontaktiere mich gerne. Ich freue mich darauf, mein bisheriges Wissen weiter auszubauen.',
                BTN: 'Lass uns reden'
            },
            PROJECTS: {
                HEADLINE: 'Ausgewählte Projekte',
                INTRODUCTION: 'Entdecke hier eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.'
            },
            CONTACTME: {
                CONTACTME: 'Kontakt',
                HEADLINE: 'Lass uns zusammenarbeiten',
                PROBLEM: 'Hast du ein Problem?',
                WORTH: 'Ermutige Besucher, dich zu kontaktieren, und beschreibe, welche Rolle dich interessiert. Zeige, welchen Mehrwert du mit deiner Arbeit für ihre Projekte schaffst.',
                Question1: 'Suchst du einen Frontend-Entwickler?',
                Question2: 'Lass uns sprechen!',
                NAME: 'Wie heißt du?',
                NAMEPLACEHOLDER: 'Dein Name',
                EMAIL: 'Wie lautet deine E-Mail?',
                EMAILPLACEHOLDER: 'deineemail@email.de',
                HELP: 'Wie kann ich dir helfen?',
                HELPPLACEHOLDER: 'Hallo Tino, ich interessiere mich für...',
                POLICY1: 'Ich habe die',
                POLICY2: 'Datenschutzerklärung',
                POLICY3: 'gelesen und stimme wie beschrieben zu.',
                ALLERT: 'Bitte akzeptiere die Datenschutzerklärung.',
                BTN: 'Sag Hallo!'
            }

        },
        en: {
            HEADER: {
                ABOUTME: 'About me',
                SKILLS: 'Skills',
                PROJECTS: 'Projects'
            },
            BUTTONS: {
                WORKBTN: 'Check my work',
                CONTACTBTN: 'Contact me',
            },
            BANNER: {
                LOCATION: 'Based in Rostcok',
                AVAILABILITY: 'Avalable for remote and office work',
                WORK: 'Open to work'
            },
            ABOUTME: {
                WHOIAM: 'Who I Am',
                ABOUTME: 'About me',
                INTRODUCTION: 'Hello, my name is... and so on, just write something here.',
                BASED: 'Where are you based? Would you be open to working remotely or potentially relocating?',
                MINDSET: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?',
                DESCRIPTION: 'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and collaboration.',
            },
            SKILLS: {
                TEC: 'Technologies',
                HEADLINE: 'Skill set',
                INTRODUCTION: 'A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.',
                QUESTION1: 'You need',
                QUESTION2: 'another Skill?',
                REQUEST: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
                BTN: `Let's talk`
            },
            PROJECTS: {
                HEADLINE: 'Featured Projects',
                INTRODUCTION: 'Explore a selection of my work here - Interact with projects to see my skills in action.'
            },
            CONTACTME: {
                CONTACTME: 'Contact me',
                HEADLINE: `Let's work Together`,
                PROBLEM: 'Got a problem?',
                WORTH: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
                Question1: 'Need a Frontend developer?',
                Question2: `Let's talk!`,
                NAME: `What's your name?`,
                NAMEPLACEHOLDER: 'Your name goes here',
                EMAIL: `What's your email`,
                EMAILPLACEHOLDER: 'youremail@email.com',
                HELP: 'How can i help you?',
                HELPPLACEHOLDER: 'Hello Tino, I am intrested in...',
                POLICY1: `I've read the`,
                POLICY2: 'privacy policy',
                POLICY3: 'and agree to the processing of my data as outlined.',
                ALLERT: 'Please accept the privacy policy.',
                BTN: 'Say Hello!'
            }
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