import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certification-item',
  standalone: true,
  imports: [],
  template: `
    <div class="certification">
      <div class="cert-item">
        <img class="logo" src={{logoSource}} alt={{altTag}}>
        <div class="certification-info">
          <h2>{{certName}}</h2>
          <h3>{{validThrough}}</h3>
        </div>
      </div>
    </div>
  `,
  styleUrl: './certification-item.component.css'
})
export class CertificationItemComponent {

  @Input() logoSource!: string
  @Input() altTag!: string;
  @Input() certName!: string;
  @Input() validThrough!: string;

}
