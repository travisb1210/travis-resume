import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [],
  template: `
    <div>
      <img class="logo" src={{logoSource}} alt={{altTag}}>
      <h2 class="education-header-content">{{institution}}</h2>
      <h3>{{degree}}</h3>
      <h3>{{dateStudied}}</h3>
      <h4>{{gpa}}</h4>
    </div>
  `,
  styleUrl: './education-item.component.css'
})
export class EducationItemComponent {

  @Input() logoSource!: string;
  @Input() altTag!: string;
  @Input() institution!: string;
  @Input() degree!: string;
  @Input() dateStudied!: string;
  @Input() gpa!: string;
}
