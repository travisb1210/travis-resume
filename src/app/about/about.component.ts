import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
  <div class="about-me">
    <div class="about-me-content-container">
        <div class="about-me-content">
        <div>    
          <img src="assets/travis.jpeg" alt="Travis Broussard photo">
        </div>
        <div>
          <p>
            Hi my name is Travis Broussard! I am a software developer who's primary experience lies in server-side development. Although
            my primary experience involves working with Java, I also have had exposure with database related tasks involving SQL and frontend 
            development utilizing HTML, CSS, and JavaScript. This website was created using these three technologies along with the Angular
            framework. Please take a look at the skills section to see the full list of technologies that I have experience with.
          </p>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Input() name!: string
}
