import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatDividerModule],
  template: `
  <div class="contact">
    <h1>Contact Me</h1>
    <mat-divider></mat-divider>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/travis-broussard-273b9519a/"><img class="contact-link" src="assets/linkedin.png" alt="LinkedIn Icon"></a>
      </li>
      <li>
        <a href="mailto:travisb1210@gmail.com"><img class="contact-link" src="assets/gmail.ico" alt="Gmail Icon"></a>
      </li>
      <li>
        <a href="tel:(337)275-0622"><img class="contact-link" src="assets/phone.png" alt="Phone Icon"></a>
      </li>
    </ul>
  </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
