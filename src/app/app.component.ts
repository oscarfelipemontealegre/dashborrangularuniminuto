import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { YComponent } from "./y/y.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, YComponent, RouterLink,RouterLinkActive ]
})
export class AppComponent {
  title = 'dashboar';
  
}


