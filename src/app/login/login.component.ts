import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private loginservice: LoginService) { }

  onSubmit() {
  

      const credentials = {
        email: this.username,
        password: this.password,
      }

      this.loginservice.login(credentials)
      .subscribe({
        next: (user) => {
          console.log(user)
        },
        error: (error) => {
          console.log(error)
        }
      });
    
  }


}
