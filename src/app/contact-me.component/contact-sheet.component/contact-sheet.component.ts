import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-sheet',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact-sheet.component.html',
  styleUrls: ['./contact-sheet.component.scss', './contact-sheet.component.mediaquarry.scss'],
})
export class ContactSheet {
  private readonly MIN_NAME_CHARS = 2;
  private readonly MIN_MESSAGE_CHARS = 10;
  isChecked = false;
  triedSubmit = false;
  http = inject(HttpClient);
  showSuccess = false;
  showTimedValidationBubbles = false;
  private _successTimer: any = null;
  private _validationTimer: any = null;

  constructor(public translation: TranslationService) { }

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  post = {
    endPoint: 'https://tinowulf.de/sendMail.php',
    body: (payload: any) => payload,
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json' as const,
    },
  };

  onCheckboxChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    if (this.isChecked) {
      this.triedSubmit = false;
    }
  }

  showValidationBubble(control: NgModel): boolean {
    return !!control?.invalid && (!!control?.touched || this.showTimedValidationBubbles);
  }

  private triggerValidationBubbles(): void {
    this.showTimedValidationBubbles = true;
    if (this._validationTimer) {
      clearTimeout(this._validationTimer);
    }
    this._validationTimer = setTimeout(() => {
      this.showTimedValidationBubbles = false;
    }, 3000);
  }

  private getNonWhitespaceLength(value: string): number {
    return (value || '').replace(/\s/g, '').length;
  }

  getValidationMessage(field: 'name' | 'email' | 'message', control: NgModel): string {
    if (!control?.errors) {
      return '';
    }

    if (control.errors['required']) {
      if (field === 'name') return this.translation.translate('CONTACTME.NAME_REQUIRED');
      if (field === 'email') return this.translation.translate('CONTACTME.EMAIL_REQUIRED');
      return this.translation.translate('CONTACTME.MESSAGE_REQUIRED');
    }

    if (field === 'name' && (control.errors['minlength'] || control.errors['pattern'])) {
      const currentLength = this.getNonWhitespaceLength(this.contactData.name);
      const remaining = this.MIN_NAME_CHARS - currentLength;

      if (remaining > 0) {
        return this.translation
          .translate('CONTACTME.NAME_MIN_REMAINING')
          .replace('{count}', String(remaining));
      }

      return this.translation.translate('CONTACTME.NAME_INVALID');
    }

    if (field === 'email' && (control.errors['email'] || control.errors['pattern'])) {
      return this.translation.translate('CONTACTME.EMAIL_INVALID');
    }

    if (field === 'message' && (control.errors['minlength'] || control.errors['pattern'])) {
      const currentLength = this.getNonWhitespaceLength(this.contactData.message);
      const remaining = this.MIN_MESSAGE_CHARS - currentLength;

      if (remaining > 0) {
        return this.translation
          .translate('CONTACTME.MESSAGE_MIN_REMAINING')
          .replace('{count}', String(remaining));
      }

      return this.translation.translate('CONTACTME.MESSAGE_INVALID');
    }

    return this.translation.translate('CONTACTME.GENERIC_INVALID');
  }

  onSubmitClick(form: NgForm) {
    this.triedSubmit = true;

    if (form.invalid) {
      this.triggerValidationBubbles();
      return;
    }

    if (!this.isChecked) return;
    if (form.submitted && form.valid && this.isChecked) {
      this.http.post<any>(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            form.resetForm();
            this.showSuccess = true;
            if (this._successTimer) clearTimeout(this._successTimer);
            this._successTimer = setTimeout(() => { this.showSuccess = false; }, 3000);
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

      this.isChecked = false;
      this.triedSubmit = false;
      this.showTimedValidationBubbles = false;
      if (this._validationTimer) {
        clearTimeout(this._validationTimer);
      }
    }
  }
}
