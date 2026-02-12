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
  styleUrl: './contact-sheet.component.scss',
})
export class ContactSheet {
  isChecked = false;
  triedSubmit = false;
  http = inject(HttpClient);

  constructor(public translation: TranslationService) { }

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
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
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            form.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });



      console.log('Form gesendet');
      console.log('Name:', this.contactData.name);
      console.log('Email:', this.contactData.email);
      console.log('Message:', this.contactData.message);

      form.resetForm();
      this.isChecked = false;
      this.triedSubmit = false;
    }
  }

}
