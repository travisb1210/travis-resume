import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  template: `
  <div class="cards">
    <mat-card class="education">
      <mat-card-header>
        <mat-card-title><h1>Education</h1></mat-card-title>
      </mat-card-header>
      <mat-card-content class="education-content">
        <div>
          <img class="cajuns-logo" src="assets/ragin_cajuns.png" alt="Ragin Cajuns Logo">
          <h2 class="education-header-content">University of Louisiana at Lafayette</h2>
          <h3>Bachelor of Science - Informatics</h3>
          <h3>August 2017 - December 2021</h3>
          <h4>3.0 GPA</h4>
        </div>
      </mat-card-content>
    </mat-card>
    <mat-divider></mat-divider>
    <mat-card class="certifications">
      <mat-card-header>
          <mat-card-title><h1>Certifications</h1></mat-card-title>
      </mat-card-header>
      <mat-card-content class="certifications-content">
        <div class="certification">
          <img class="aws-logo" src="assets/aws_ccp_badge.png" alt="AWS Certified Cloud Practioner Badge">
          <div class="certification-info">
            <h2>AWS Certified Cloud Practioner</h2>
            <h3>Valid Through December 2026</h3>
          </div>
        </div>
        <mat-divider></mat-divider>
        <div class="certification">
          <img class="aws-logo" src="assets/aws_saa_badge.png" alt="AWS Solutions Architect Associate Badge">
          <div class="certification-info">
            <h2>AWS Solutions Architect Associate</h2>
            <h3>Valid Through January 2027</h3>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  `,
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
