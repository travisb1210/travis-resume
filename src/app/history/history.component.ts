import { Component } from '@angular/core';
import { JobComponent } from './jobs/job.component';
import { NgFor } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [JobComponent, NgFor, MatDividerModule],
  template: `
  <div class="work-history">
  <h1>Work History</h1>
    <mat-divider></mat-divider>
    <div class="jobs">
      <app-job 
        [logoSrc]="'assets/goldbelt-logo.svg'" 
        [alt]="'Goldbelt Logo'"
        [webUrl]="'https://www.goldbelt.com/'"
        [jobTitle]="'Software Developer'"
        [datesEmployed]="'February 2024 - Present'"
        [summary]="goldbeltSummary"
        [notableContributions]="goldbeltContributions" >
      </app-job>
      <mat-divider></mat-divider>
      <app-job 
        [logoSrc]="'assets/cgi_logo.svg'"
        [alt]="'CGI Logo'" 
        [webUrl]="'https://www.cgi.com/en'"
        [jobTitle]="'Software Developer'"
        [datesEmployed]="'January 2022 - February 2024'"
        [summary]="cgiSummary"
        [notableContributions]="cgiContributions" >
      </app-job>
    </div>
  </div>
  `,
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  cgiSummary: string = "Collaborated with 8 person multidiscipline Agile team in various efforts to develop, modernize and secure monolithic JSP banking application deployed on an Apache Tomcat server as well as several RESTful APIs that run on Java 17 and Spring Boot 3 and hosted on Kubernetes pods running on the OpenShift Container cloud platform."
  goldbeltSummary: string = "Contributed maintenance and development of US Navy My Navy Assignment (MNA) platform as part of large waterfall based development team "

  cgiContributions: string[] = [
    "Facilitated migration upgrade of all applications to Java 17 and Spring Boot 3, aligning with the organizational goal to modernize working tech stack",
    "Developed 2 Spring Boot microservices to facilitate a new JWT-based authentication mechanism, leading to a more secure transfer of user data while streamlining the backend authentication process by approximately 75%",
    "Worked with cross functional team in the maintenance and development of 8+ legacy Springboot microservices and 12 first-party libraries surrounding monolithic servlet application while maintaining 80% code coverage via unit testing with the JUnit Framework",
    "Implemented blacklist-whitelist feature, increasing the user experience for opted-in users by 50% by forcing step-up or bypass of MFA processes",
    "Collaborated with QA testers in troubleshooting and debugging UAT/QA/Pre-Prod environments to ensure 100% application uptime in production environment",
    "Implemented database rollout mechanism to incrementally onboard approximately 400,000 users into email notification feature for newly identified devices over 6 month period"
  ]

  goldbeltContributions: string[] = [
    "Implemented requirements and feedback provided by both team leaders and testing team to improve look and flow of application",
    "Contributed to improvement of user experience for MNA platform."
  ]
}
