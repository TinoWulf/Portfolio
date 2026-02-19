import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-sheet',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact-sheet.component.html',
  styleUrls: ['./contact-sheet.component.scss', './contact-sheet.component.mediaquarry.scss'],
})
export class ContactSheet {
  isChecked = false;
  triedSubmit = false;
  http = inject(HttpClient);
  showSuccess = false;
  private _successTimer: any = null;

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

  onSubmitClick(form: NgForm) {
    this.triedSubmit = true;

    if (!this.isChecked) return;
    if (form.invalid) return;
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
    }
  }
}
