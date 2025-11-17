import { Component, inject } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { menu } from '../menu/menu';

interface IaapMenuItem {
    label: string;
    icon?: string;
    routerLink?: string[];
    command?: string;
    items?: IaapMenuItem[];
}

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [NgFor, NgIf, CommonModule, RouterLink],
    template: `
        <nav class="iaap-menu">
            <div class="iaap-menu-section" *ngFor="let section of menu">
                <div class="iaap-menu-section-label" *ngIf="section.label">
                    {{ section.label }}
                </div>

                <ul class="iaap-menu-list">
                    <li *ngFor="let item of section.items"
                        (click)="handleCommand(item)">
                        
                        <a
                            class="iaap-menu-link"
                            [routerLink]="item.routerLink || []"
                        >
                            <i *ngIf="item.icon" [class]="item.icon + ' iaap-menu-icon'"></i>
                            <span class="iaap-menu-text">{{ item.label }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    styles: [`
        .iaap-menu {
            padding: 1rem 0.75rem;
            font-size: 0.95rem;
        }

        .iaap-menu-section + .iaap-menu-section {
            margin-top: 1.5rem;
        }

        .iaap-menu-section-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--surface-500);
            margin-bottom: 0.5rem;
        }

        .iaap-menu-list {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .iaap-menu-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.45rem 0.6rem;
            border-radius: 6px;
            color: var(--surface-700);
            text-decoration: none;
            cursor: pointer;
        }

        .iaap-menu-link:hover {
            background: var(--surface-100);
            color: var(--primary-color);
        }

        .iaap-menu-icon {
            font-size: 1rem;
        }

        .iaap-menu-text {
            white-space: nowrap;
        }
    `]
})
export class AppMenu {

    menu = menu;

    auth = inject(AuthService);
    router = inject(Router);

    handleCommand(item: IaapMenuItem) {
        if (!item.command) return;

        if (item.command === 'logout') {
            this.auth.logout();
            this.router.navigate(['/login']);
        }
    }
}
