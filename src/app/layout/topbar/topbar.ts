import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-topbar',
    standalone: true,
    templateUrl: './app.topbar.html',
    styleUrls: ['./app.topbar.scss']
})
export class AppTopbar {

    @Output() menuToggle = new EventEmitter<void>();

    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    logout() {
        console.log("logout");
    }
}
