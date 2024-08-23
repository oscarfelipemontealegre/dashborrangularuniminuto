import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistroService } from './services/registro.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']  // Cambio de "styleUrl" a "styleUrls"
})
export class RegistroComponent {

  username: string = '';
  email: string = '';  
  password: string = '';
  confirmPassword: string = '';  
  


  constructor(private registroservice: RegistroService) { }  

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);


    const credentialsRegister = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword  
    };

    this.registroservice.registro(credentialsRegister)
    .subscribe({
      next: (userRegister: any) => {
        console.log('Registro exitoso:', userRegister);
      },
      error: (error: any) => {
        console.log('Error en el registro:', error);
      }
    });
  
  }
}
