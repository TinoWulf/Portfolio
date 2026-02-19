import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private languageSubject = new BehaviorSubject<'de' | 'en'>('en');
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
                BTN: 'Lass uns reden'
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
                SENT: 'Nachricht gesendet, danke für deine Kontaktaufnahme! Ich werde mich so schnell wie möglich bei dir melden.'
            }
            ,
            POLICY: {
                TITLE: 'Datenschutzerklärung',
                INTRO: 'Diese Datenschutzerklärung erklärt, wie ich personenbezogene Daten sammle und verwende.',
                LAST_UPDATED: 'Zuletzt aktualisiert:',
                SECTIONS: {
                    COLLECTION: {
                        TITLE: 'Welche Daten werden gesammelt?',
                        CONTENT: 'Kontaktinformationen, freiwillige Angaben aus Formularen und technische Metadaten.'
                    },
                    USAGE: {
                        TITLE: 'Wofür werden Daten verwendet?',
                        CONTENT: 'Antworten auf Anfragen, Verbesserung der Website und rechtliche Zwecke.'
                    },
                    COOKIES: {
                        TITLE: 'Cookies',
                        CONTENT: 'Die Seite verwendet Cookies zur Verbesserung der Nutzererfahrung.'
                    },
                    RIGHTS: {
                        TITLE: 'Ihre Rechte',
                        CONTENT: 'Sie können Zugang, Berichtigung oder Löschung Ihrer Daten verlangen.'
                    }
                },
                CONTACT: 'Bei Fragen zur Datenschutzerklärung kontaktieren Sie mich bitte unter:',
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
                BTN: `Let's talk`
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
                SENT: 'Message sent, thank you for reaching out! I will get back to you as soon as possible.'
            }
            ,
            POLICY: {
                TITLE: 'Legal Notice',
                SECTIONS: {
                    IMPRINT: {
                        TITLE: 'Imprint',
                        CONTENT1: 'Tino Willy Wulf',
                        CONTENT2: 'Wiggersstraße 9',
                        CONTENT3: '18057 Rostock',
                        CONTENT4: 'Germany'
                    },
                    EXPLORING: {
                        TITLE: 'Exploring the Board',
                        CONTENT: 'wulf.tino.gz@gmail.com'
                    },
                    ACCEPTANCE: {
                        TITLE: 'Acceptance of terms',
                        CONTENT: 'By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.'
                    },
                    SCOPE: {
                        TITLE: 'Scope and ownership of the product',
                        CONTENT: 'Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product. The design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.'
                    },
                    PROPRIETARY: {
                        TITLE: 'Proprietary rights',
                        CONTENT: 'Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.'
                    },
                    USE: {
                        TITLE: 'Use of the product',
                        CONTENT: 'Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.'
                    },
                    DISCLAIMER: {
                        TITLE: 'Disclaimer of warranties and limitation of liability',
                        CONTENT: 'Portfolio is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio.'
                    },
                    INDEMNITY: {
                        TITLE: 'Indemnity',
                        CONTENT: 'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.'
                    },
                },
                CONTACT: 'For any questions or notices, please contact us at wulf.tino.gz@gmail.com',
                DATE: 'Date: 11.02.2026'
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