import { Component } from '@angular/core';
import { ContactSheet } from './contact-sheet/contact-sheet';

@Component({
  selector: 'app-contact-me',
  imports: [ContactSheet],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {

}
