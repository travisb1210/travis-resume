import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (skill of skillList; track $index) {
        <li>{{skill}}</li>
      }
    </ul>
  `,
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  @Input() skillList!: string[]
}
