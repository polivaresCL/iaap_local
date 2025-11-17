import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="login-container">
      <div class="login-box">
        <h2>IAAP - Iniciar sesión</h2>

        <input type="email" [(ngModel)]="email" placeholder="Correo electrónico" />
        <input type="password" [(ngModel)]="password" placeholder="Contraseña" />

        <button (click)="handleLogin()">Ingresar</button>

        <p class="error" *ngIf="error">
          Credenciales incorrectas.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: var(--surface-100);
    }

    .login-box {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      width: 350px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.12);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    input {
      width: 100%;
      padding: 0.7rem;
      border: 1px solid var(--surface-400);
      border-radius: 6px;
    }

    button {
      padding: 0.8rem;
      width: 100%;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .error {
      color: red;
      font-size: 0.9rem;
    }
  `]
})
export class Login {

  email = '';
  password = '';
  error = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  handleLogin() {
    const ok = this.auth.login(this.email, this.password);

    if (!ok) {
      this.error = true;
      return;
    }

    this.router.navigate(['/dashboard']);
  }
}
