import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.services';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-contact-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-sheet.component.html',
  styleUrl: './contact-sheet.component.scss',
})
export class ContactSheet {
  isChecked = false;
  triedSubmit = false;
  
  constructor(public translation: TranslationService) {}

  onCheckboxChange (event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    if (this.isChecked) {
      this.triedSubmit = false;
    }
  }

  onSubmitClick() {
    if (!this.isChecked) {
      this.triedSubmit = true;      
      return;
    }
    this.triedSubmit = false;
    console.log('Form gesendet');
  }
}
