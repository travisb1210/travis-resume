import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider';
import { StateService } from './shared/state.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  stateService = inject(StateService)

  changeMenuColor() {
    switch(this.stateService.getColor()) {
      case "primary":
        this.stateService.setColor("accent");
        break
      case "accent":
        this.stateService.setColor("primary");
        break;
      default:
        this.stateService.setColor("warn")  
    }
  }
}
