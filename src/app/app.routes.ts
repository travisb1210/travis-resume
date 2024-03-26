import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    {
        path: "",
        component: AboutComponent,
        title: "About Me"
    },
    {
        path: "contact",
        component: ContactComponent,
        title: "Contact Me"
    },
    {
        path: "education",
        component: EducationComponent,
        title: "Education"
    },
    {
        path: "skills",
        component: SkillsComponent,
        title: "Skills"
    },
    {
        path: "history",
        component: HistoryComponent,
        title: "Work History"
    },
];
