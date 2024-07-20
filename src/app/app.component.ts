import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { YComponent } from "./y/y.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, YComponent, RouterLink, RouterLinkActive, CommonModule, HomeComponent]
})
export class AppComponent {
  title = 'dashboar';
  
}


