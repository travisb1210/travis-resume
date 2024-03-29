import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillComponent } from './skill/skill.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatTabsModule, SkillComponent, MatDividerModule],
  template: `
    <mat-tab-group>
      <mat-tab label="Technologies">
        <mat-divider></mat-divider>
        <app-skill [skillList]="technologiesSkills"></app-skill>
      </mat-tab>
      <mat-tab label="Frameworks">
        <mat-divider></mat-divider>
        <app-skill [skillList]="frameWorksSkills"></app-skill>
      </mat-tab>
      <mat-tab label="Concepts">
        <mat-divider></mat-divider>
        <app-skill [skillList]="conceptsSkills"></app-skill>
      </mat-tab>
      <mat-tab label="Tools">
        <mat-divider></mat-divider>
        <app-skill [skillList]="toolsSkills"></app-skill>
      </mat-tab>
      <mat-tab label="Soft Skills">
        <mat-divider></mat-divider>
        <app-skill [skillList]="softSkills"></app-skill>
      </mat-tab>
      <mat-tab label="Personal Skills">
        <mat-divider></mat-divider>
        <app-skill [skillList]="personalSkills"></app-skill>
      </mat-tab>
    </mat-tab-group>
  `,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  technologiesSkills: string[] = [
    "Java 8/17", 
    "Gradle", 
    "Oracle 19C",
    "Database", 
    "JSP", 
    "Servlet", 
    "Applications", 
    "Apache Tomcat", 
    "Apigee", 
    "Typescript", 
    "HTML5", 
    "CSS3",
    "Oracle SQL",
    "PostreSQL"
  ]

  frameWorksSkills: string[] =[
    "JUnit Testing", 
    "Spring Framework",
    "Angular",
    "Typescript", 
    "Mockito"
  ]

  conceptsSkills: string[] = [
    "XML", 
    "JSON",
    "SOAP", 
    "HTTP", 
    "RESTful APIs",
    "Agile Development", 
    "CI", 
    "CD", 
    "GIT", 
    "CLI", 
    "SQL", 
    "NPM", 
    "Backend Web Development", 
    "Unit Testing", 
    "Integration Testing"
  ]

  toolsSkills: string[] = [
    "Atlassian Suite", 
    "JIRA", 
    "Confluence", 
    "Jenkins"
  ]

  softSkills: string[] = [
    "Verbal & Written Communication", 
    "Code Review", 
    "Initiative", 
    "Analysis", 
    "Flexibility", 
    "Interpersonal Communication"
  ]

  personalSkills: string[] = [
    "Guitar", 
    "Roller Skating",
    "Working Out"
  ]
}
