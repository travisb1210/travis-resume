import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="job">
      <div class="job-header">
        <a href={{webUrl}}><img src={{logoSrc}} alt={{alt}}></a>
        <h2>{{jobTitle}}</h2>
        <h3>{{datesEmployed}}</h3>
      </div>
      <p class="summary"><em>{{summary}}</em></p>
      <ul>
        @for (contribution of notableContributions; track $index) {
          <li>{{contribution}}</li>
        }
      </ul>
    </div>
  `,
  styleUrl: './job.component.css'
})
export class JobComponent {

  @Input() logoSrc!: string
  @Input() alt!: string
  @Input() webUrl!: string
  @Input() jobTitle!: string
  @Input() datesEmployed!: string
  @Input() summary!: string;
  @Input() notableContributions!: string[]
  
}
