import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider';



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
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  toolbarColor: string = "primary"

  changeMenuColor() {
    switch(this.toolbarColor) {
      case "primary":
        this.toolbarColor = "accent";
        break
      case "accent":
        this.toolbarColor = "primary";
        break;
      default:
        this.toolbarColor = "warn"  
    }
  }
}
