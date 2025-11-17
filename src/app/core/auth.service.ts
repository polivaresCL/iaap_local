import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged = signal<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!localStorage.getItem('iaap_token');
  }

  isLogged() {
    return this._logged();
  }

  login(email: string, password: string): boolean {
    if (email === 'admin@iaap.dev' && password === 'admin123') {
      localStorage.setItem('iaap_token', 'demo-token-123');
      this._logged.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('iaap_token');
    this._logged.set(false);
  }
}
