import { Component } from '@angular/core';
import { YComponent } from '../y/y.component';
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [YComponent, LoginComponent]
})
export class HomeComponent {

}
