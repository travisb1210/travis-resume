import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { EducationItemComponent } from './education-item/education-item.component';
import { CertificationItemComponent } from './certification-item/certification-item.component';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, EducationItemComponent, CertificationItemComponent],
  template: `
  <div class="cards">
    <mat-card class="education">
      <mat-card-header>
        <mat-card-title><h1>Education</h1></mat-card-title>
      </mat-card-header>
      <mat-card-content class="education-content">
        <app-education-item
          [logoSource]="'assets/ragin_cajuns.png'"
          [altTag]="'Ragin Cajuns Logo'"
          [institution]="'University of Louisiana at Lafayette'"
          [degree]="'Bachelor of Science - Informatics'"
          [dateStudied]="'August 2017 - December 2021'"
          [gpa]="'3.0 GPA'">
        </app-education-item>
      </mat-card-content>
    </mat-card>
    <mat-divider></mat-divider>
    <mat-card class="certifications">
      <mat-card-header>
          <mat-card-title><h1>Certifications</h1></mat-card-title>
      </mat-card-header>
      <mat-card-content class="certifications-content">
        <div class="cert">
          <app-certification-item class='cert-item'
            [logoSource]="'assets/aws_ccp_badge.png'"
            [altTag]="'AWS Certified Cloud Practioner Badge'"
            [certName]="'AWS Certified Cloud Practioner'"
            [validThrough]="'Valid Through December 2026'">
          </app-certification-item>
        </div>
        <mat-divider></mat-divider>
        <div class="cert">
          <app-certification-item class="cert-item"
            [logoSource]="'assets/aws_saa_badge.png'"
            [altTag]="'AWS Solutions Architect Associate Badge'"
            [certName]="'AWS Solutions Architect Associate'"
            [validThrough]="'Valid Through January 2027'">   
          </app-certification-item>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  `,
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
