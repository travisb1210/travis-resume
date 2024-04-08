import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ContactItem } from '../contact-item';

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
        <a href={{linkedIn.href}}><img class={{linkedIn.imgClass}} src={{linkedIn.imgSrc}} alt={{linkedIn.imgAlt}}></a>
      </li>
      <li>
        <a href={{gmail.href}}><img class={{gmail.imgClass}} src={{gmail.imgSrc}} alt={{gmail.imgAlt}}></a>
      </li>
      <li>
        <a href={{gmail.href}}><img class={{gmail.imgClass}} src={{gmail.imgSrc}} alt={{gmail.imgAlt}}></a>
      </li>
    </ul>
  </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  linkedIn: ContactItem = {
    href: "https://www.linkedin.com/in/travis-broussard-273b9519a/",
    imgClass: "contact-link",
    imgSrc: "assets/linkedin.png",
    imgAlt: "LinkedIn Icon"
  }

  gmail: ContactItem = {
    href: "mailto:travisb1210@gmail.com",
    imgClass: "contact-link",
    imgSrc: "assets/gmail.ico",
    imgAlt: "Gmail Icon"
  }

  mobile: ContactItem = {
    href: "tel:(337)275-0622",
    imgClass: "contact-link",
    imgSrc: "assets/phone.png",
    imgAlt: "Phone Icon"
  }
}
