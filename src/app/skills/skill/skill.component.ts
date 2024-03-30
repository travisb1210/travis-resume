import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  template: `
  <div class="skill">
    <ul>
      @for (skill of skillList; track $index) {
        <li>{{skill}}</li>
      }
    </ul>
  </div>
  `,
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  @Input() skillList!: string[]
}
