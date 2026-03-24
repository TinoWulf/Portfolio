import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private readonly LANG_STORAGE_KEY = 'portfolio_lang';
    private languageSubject = new BehaviorSubject<'de' | 'en'>(this.getInitialLanguage());
    language$ = this.languageSubject.asObservable();

    private translations = {
        de: {
            HEADER: {
                ABOUTME: 'Über mich',
                SKILLS: 'Fähigkeiten',
                PROJECTS: 'Projekte'
            },
            BUTTONS: {
                WORKBTN: 'Meine Projekte',
                CONTACTBTN: 'Schreib mir',
            },
            BANNER: {
                LOCATION: 'Wohnhaft in Rostock',
                AVAILABILITY: 'Verfügbar für Homeoffice und Büro',
                WORK: 'Bereit direkt anzufangen'
            },
            HERO: {
                ROLE: 'Frontend Entwickler'
            },
            ABOUTME: {
                WHOIAM: 'Wer ich bin',
                ABOUTME: 'Über mich',
                INTRODUCTION: 'Hallo, mein Name ist Tino Wulf. Ich bin ein motivierter, zuverlässiger IT-Enthusiast mit ausgeprägtem Verantwortungsbewusstsein und strukturierter Denkweise.',
                BASED: 'Ich lebe derzeit in Rostock und bin offen für Remote-Arbeit, bevorzuge aber die Arbeit im Büro. Ich bin flexibel und kann mich an verschiedene Arbeitsmodelle anpassen.',
                MINDSET: 'Ich suche aktiv nach neuen Herausforderungen und schätze Feedback als Chance zur beruflichen und persönlichen Weiterentwicklung.',
                DESCRIPTION: 'Durch meine berufliche Laufbahn als Offizier und meine aktuelle Weiterbildung im Frontend-Bereich habe ich ein starkes Interesse an Technologie, Problemlösung und kontinuierlicher Selbstverbesserung entwickelt.',
            },
            SKILLS: {
                TEC: 'Technologien',
                HEADLINE: 'Fähigkeiten',
                INTRODUCTION: 'Ich entwickle mich kontinuierlich weiter und passe mich schnell an neue Technologien und Arbeitsabläufe an. Ich entwickle mit HTML, CSS und JavaScript und setze diese Kenntnisse in realen Projekten ein. Ergänzend nutze ich KI-Tools effizient für Entwicklung, Debugging und Optimierung und erstelle mit Angular strukturierte, dynamische Webanwendungen.',
                QUESTION1: 'Du suchst',
                QUESTION2: 'weitere Fähigkeiten?',
                REQUEST: 'Kontaktiere mich gerne. Ich freue mich darauf, mein bisheriges Wissen weiter auszubauen.',
                BTN: 'Lass uns reden',
                MINDSET_LABEL: 'Growth Mindset',
                MINDSET_TOOLTIP: 'Ich habe besonderes Interesse daran, Backend zu lernen'
            },
            PROJECTS: {
                HEADLINE: 'Ausgewählte Projekte',
                INTRODUCTION: 'Entdecke hier eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
                ABOUT: 'Worum geht es in diesem Projekt?',
                DESCRIPTION1: 'Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben können per Drag & Drop erstellt und organisiert und anschließend mit Benutzer und Kategorien zugewiesen werden.',
                DESCRIPTION2: 'Einfaches Browserspiel in JavaScript. Die Spielfigur steuern, Hindernissen ausweichen, Items sammeln und Level abschließen. Fokus auf objektorientierter Programmierung und Strukturierung der Spiellogik mit Klassen. Benutzer und Kategorien zuweisen.',
                DESCRIPTION3: 'Webbasierte Pokédex-Anwendung. Pokémon durchsuchen und suchen, Werte, Typen und Fähigkeiten in einer interaktiven Oberfläche anzeigen. Datenabruf von APIs und Verarbeitung asynchroner Anfragen.'
            },
            CONTACTME: {
                CONTACTME: 'Kontakt',
                HEADLINE: 'Lass uns zusammenarbeiten',
                PROBLEM: 'Hast du ein Problem?',
                WORTH: 'Ich bin jederzeit offen für Gespräche über Ideen, Anforderungen und mögliche Lösungen und erläutere Ihnen gerne meine Kompetenzen im Detail. Mit strukturierter Arbeitsweise, Zuverlässigkeit und einem ausgeprägten Verantwortungsbewusstsein möchte ich Ihre Projekte mit praxisorientierten und durchdachten Lösungen unterstützen und einen echten Mehrwert für Ihre Anwendungen schaffen.',
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
                BTN: 'Sag Hallo!',
                SENT: 'Nachricht gesendet, danke für deine Kontaktaufnahme! Ich werde mich so schnell wie möglich bei dir melden.',
                VALIDATION_TITLE: 'Bitte gültig ausfüllen',
                NAME_REQUIRED: 'Bitte gib deinen Namen ein.',
                NAME_MIN_REMAINING: 'Bitte gib noch {count} Buchstaben ein.',
                NAME_INVALID: 'Der Name muss mindestens 2 Zeichen enthalten und darf nur Buchstaben enthalten.',
                EMAIL_REQUIRED: 'Bitte gib deine E-Mail-Adresse ein.',
                EMAIL_INVALID: 'Bitte gib eine gültige E-Mail-Adresse ein.',
                MESSAGE_REQUIRED: 'Bitte gib eine Nachricht ein.',
                MESSAGE_MIN_REMAINING: 'Bitte gib noch {count} Zeichen ein.',
                MESSAGE_INVALID: 'Die Nachricht muss mindestens 10 Zeichen enthalten.',
                GENERIC_INVALID: 'Bitte prüfe dieses Feld.'
            },
            FOOTER: {
                LEGAL_NOTICE: 'Impressum'
            },
            IMPRINT: {
                TITLE: 'Impressum',
                SECTIONS: {
                    IMPRINT: {
                        TITLE: 'Angaben gemäß § 5 TMG',
                        CONTENT1: 'Tino Willy Wulf',
                        CONTENT2: 'Wiggersstraße 9',
                        CONTENT3: '18057 Rostock',
                        CONTENT4: 'Deutschland'
                    },
                    CONTACT: {
                        TITLE: 'Kontakt',
                        CONTENT: 'E-Mail: wulf.tino.gz@gmail.com'
                    },
                    RESPONSIBLE: {
                        TITLE: 'Verantwortlich für den Inhalt',
                        CONTENT: 'Tino Willy Wulf, Anschrift wie oben.'
                    },
                    DISPUTE: {
                        TITLE: 'EU-Streitschlichtung',
                        CONTENT: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/. Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                    }
                },
                CONTACT: 'Bei Fragen kontaktieren Sie mich bitte unter: wulf.tino.gz@gmail.com',
                DATE: 'Stand: 24.03.2026',
                BTN_BACK_HOME: 'Zur Startseite'
            },
            POLICY: {
                TITLE: 'Datenschutzerklärung',
                INTRO: 'Diese Datenschutzerklärung erklärt, wie ich personenbezogene Daten bei der Nutzung dieser Website verarbeite.',
                SECTIONS: {
                    CONTROLLER: {
                        TITLE: 'Verantwortliche Stelle',
                        CONTENT: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist: Tino Willy Wulf, Wiggersstraße 9, 18057 Rostock, Deutschland, E-Mail: wulf.tino.gz@gmail.com.'
                    },
                    COLLECTION: {
                        TITLE: 'Welche Daten werden erfasst?',
                        CONTENT: 'Beim Besuch dieser Website werden technisch notwendige Verbindungsdaten verarbeitet, z. B. Browsertyp, Uhrzeit und gekürzte IP-Adresse. Bei einer Kontaktaufnahme werden zusätzlich die von Ihnen eingegebenen Angaben wie Name, E-Mail-Adresse und Nachricht verarbeitet.'
                    },
                    USAGE: {
                        TITLE: 'Zwecke der Verarbeitung',
                        CONTENT: 'Die Datenverarbeitung erfolgt zur Bereitstellung und sicheren Auslieferung der Website, zur Bearbeitung von Kontaktanfragen sowie zur technischen Fehleranalyse und Verbesserung des Angebots.'
                    },
                    LEGAL_BASIS: {
                        TITLE: 'Rechtsgrundlagen',
                        CONTENT: 'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Webauftritt) sowie ggf. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).'
                    },
                    RETENTION: {
                        TITLE: 'Speicherdauer',
                        CONTENT: 'Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden sie gelöscht.'
                    },
                    COOKIES: {
                        TITLE: 'Cookies',
                        CONTENT: 'Diese Website verwendet nur technisch notwendige Cookies, sofern erforderlich. Es findet kein Tracking zu Werbezwecken statt.'
                    },
                    RIGHTS: {
                        TITLE: 'Ihre Rechte',
                        CONTENT: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.'
                    },
                    SECURITY: {
                        TITLE: 'Sicherheit',
                        CONTENT: 'Es werden angemessene technische und organisatorische Maßnahmen getroffen, um Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.'
                    }
                },
                CONTACT: 'Bei Fragen zum Datenschutz kontaktieren Sie mich bitte unter: wulf.tino.gz@gmail.com',
                DATE: 'Stand: 24.03.2026',
                BTN_READ_POLICY: 'Ich habe die Datenschutzerklärung gelesen',
                BTN_BACK_HOME: 'Zur Startseite',
                BACK_BTN: 'Zurück',
                ACCEPT_BTN: 'Akzeptieren',
                DECLINE_BTN: 'Ablehnen'
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
                LOCATION: 'Based in Rostock',
                AVAILABILITY: 'Available for remote and office work',
                WORK: 'Open to work'
            },
            HERO: {
                ROLE: 'Frontend Developer'
            },
            ABOUTME: {
                WHOIAM: 'Who I Am',
                ABOUTME: 'About me',
                INTRODUCTION: 'Hello, my name is Tino Wulf. I am a motivated and reliable IT enthusiast with a strong sense of responsibility and a structured way of thinking.',
                BASED: 'I am currently based in Rostock, Germany and I am open to work remotely, but I would always prefer working in an office. I am comfortable adapting to different working models.',
                MINDSET: 'I actively seek new challenges and value feedback as an opportunity to grow both professionally and personally.',
                DESCRIPTION: 'Through my professional background as an officer and my current further training in frontend development, I have developed a strong interest in technology, problem-solving and continuous self-improvement.',
            },
            SKILLS: {
                TEC: 'Technologies',
                HEADLINE: 'Skill set',
                INTRODUCTION: 'Since web development evolves rapidly, I value continuous improvement and adapt quickly to new technologies and workflows. I developed in HTML, CSS and JavaScript and applied these skills in real projects over time. In addition, I learned how to use AI tools efficiently to support development, debugging and optimization processes and work with Angular to build structured, dynamic web applications.',
                QUESTION1: 'You need',
                QUESTION2: 'another Skill?',
                REQUEST: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
                BTN: `Let's talk`,
                MINDSET_LABEL: 'Growth Mindset',
                MINDSET_TOOLTIP: 'I have special interest in learning Backend'
            },
            PROJECTS: {
                HEADLINE: 'Featured Projects',
                INTRODUCTION: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
                ABOUT: 'What is this project about?',
                DESCRIPTION1: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
                DESCRIPTION2: 'Simple browser game built with JavaScript. Control the character, avoid obstacles, collect items, and complete levels. Focus on object-oriented programming and structuring game logic with classes., assign users and categories.',
                DESCRIPTION3: 'Web-based Pokédex application. Browse and search Pokémon, view stats, types, and abilities in an interactive interface. Highlights fetching data from APIs and handling asynchronous requests.'
            },
            CONTACTME: {
                CONTACTME: 'Contact me',
                HEADLINE: `Let's work Together`,
                PROBLEM: 'Got a problem?',
                WORTH: 'I am always open to discussing ideas, requirements and possible solutions and to explain my skills in more detail. With a structured mindset, reliability and a strong sense of responsibility, I aim to support your projects with practical, well-thought-out solutions and contribute real value to your applications.',
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
                BTN: 'Say Hello!',
                SENT: 'Message sent, thank you for reaching out! I will get back to you as soon as possible.',
                VALIDATION_TITLE: 'Please enter valid data',
                NAME_REQUIRED: 'Please enter your name.',
                NAME_MIN_REMAINING: 'Please enter {count} more letters.',
                NAME_INVALID: 'Name must contain at least 2 characters and letters only.',
                EMAIL_REQUIRED: 'Please enter your email address.',
                EMAIL_INVALID: 'Please enter a valid email address.',
                MESSAGE_REQUIRED: 'Please enter a message.',
                MESSAGE_MIN_REMAINING: 'Please enter {count} more characters.',
                MESSAGE_INVALID: 'Message must contain at least 10 characters.',
                GENERIC_INVALID: 'Please check this field.'
            },
            FOOTER: {
                LEGAL_NOTICE: 'Legal Notice'
            },
            IMPRINT: {
                TITLE: 'Legal Notice',
                SECTIONS: {
                    IMPRINT: {
                        TITLE: 'Information according to Section 5 TMG',
                        CONTENT1: 'Tino Willy Wulf',
                        CONTENT2: 'Wiggersstrasse 9',
                        CONTENT3: '18057 Rostock',
                        CONTENT4: 'Germany'
                    },
                    CONTACT: {
                        TITLE: 'Contact',
                        CONTENT: 'Email: wulf.tino.gz@gmail.com'
                    },
                    RESPONSIBLE: {
                        TITLE: 'Responsible for content',
                        CONTENT: 'Tino Willy Wulf, address as stated above.'
                    },
                    DISPUTE: {
                        TITLE: 'EU dispute resolution',
                        CONTENT: 'The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr/. I am not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.'
                    }
                },
                CONTACT: 'For legal inquiries, please contact me at wulf.tino.gz@gmail.com',
                DATE: 'Status: 24.03.2026',
                BTN_BACK_HOME: 'Back to home'
            },
            POLICY: {
                TITLE: 'Privacy Policy',
                INTRO: 'This privacy policy explains how personal data is processed when visiting this website and when contacting me.',
                SECTIONS: {
                    CONTROLLER: {
                        TITLE: 'Controller',
                        CONTENT: 'The controller responsible for data processing on this website is: Tino Willy Wulf, Wiggersstrasse 9, 18057 Rostock, Germany, email: wulf.tino.gz@gmail.com.'
                    },
                    COLLECTION: {
                        TITLE: 'Which data is collected?',
                        CONTENT: 'When you visit this website, technically required connection data may be processed (for example browser type, timestamp, and shortened IP address). When you contact me, the information you provide such as name, email address, and message is processed.'
                    },
                    USAGE: {
                        TITLE: 'Purpose of processing',
                        CONTENT: 'Data is processed to provide a secure and stable website, to respond to contact requests, and to analyze technical errors and improve the service.'
                    },
                    LEGAL_BASIS: {
                        TITLE: 'Legal basis',
                        CONTENT: 'Processing is based on Art. 6(1)(b) GDPR (pre-contractual communication), Art. 6(1)(f) GDPR (legitimate interest in website security and functionality), and where applicable Art. 6(1)(a) GDPR (consent).'
                    },
                    RETENTION: {
                        TITLE: 'Data retention',
                        CONTENT: 'Personal data is stored only for as long as necessary for the stated purposes or as required by legal retention obligations. Data is deleted afterwards.'
                    },
                    COOKIES: {
                        TITLE: 'Cookies',
                        CONTENT: 'This website only uses technically necessary cookies if required. No advertising or tracking cookies are used.'
                    },
                    RIGHTS: {
                        TITLE: 'Your rights',
                        CONTENT: 'You have the right to access, rectify, erase, restrict processing, data portability, and object to processing. You also have the right to lodge a complaint with a supervisory authority.'
                    },
                    SECURITY: {
                        TITLE: 'Security',
                        CONTENT: 'Appropriate technical and organizational measures are implemented to protect your data against loss, misuse, and unauthorized access.'
                    },
                },
                CONTACT: 'For privacy-related inquiries, please contact me at wulf.tino.gz@gmail.com',
                DATE: 'Status: 24.03.2026',
                BTN_READ_POLICY: 'I have read the privacy policy',
                BTN_BACK_HOME: 'Back to home',
                BACK_BTN: 'Back',
                ACCEPT_BTN: 'Accept',
                DECLINE_BTN: 'Decline'
            }
        }
    };

    private getInitialLanguage(): 'de' | 'en' {
        const savedLanguage = this.readStoredLanguage();
        return savedLanguage ?? 'en';
    }

    private readStoredLanguage(): 'de' | 'en' | null {
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
            return null;
        }

        const storedLanguage = localStorage.getItem(this.LANG_STORAGE_KEY);
        return storedLanguage === 'de' || storedLanguage === 'en' ? storedLanguage : null;
    }

    private storeLanguage(language: 'de' | 'en'): void {
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
            return;
        }

        localStorage.setItem(this.LANG_STORAGE_KEY, language);
    }

    getLanguage(): 'de' | 'en' {
        return this.languageSubject.value;
    }

    setLanguage(language: 'de' | 'en'): void {
        this.languageSubject.next(language);
        this.storeLanguage(language);
    }

    // change language
    toggleLanguage() {
        const newLang = this.languageSubject.value === 'de' ? 'en' : 'de';
        this.setLanguage(newLang);
    }

    // Get translation
    translate(path: string): string {
        const lang = this.languageSubject.value;
        return path.split('.').reduce((obj: any, key) => obj?.[key], this.translations[lang]) || path;
    }
}