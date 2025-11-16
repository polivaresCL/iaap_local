import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [NgFor, AppMenuitem],
    template: `
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model">
                <li app-menuitem [item]="item"></li>
            </ng-container>
        </ul>
    `
})
export class AppMenu {

    model: any[] = [
        {
            label: 'Home',
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-chart-bar',
                    routerLink: ['/dashboard']
                }
            ]
        },

        {
            label: 'WhatsApp',
            icon: 'pi pi-whatsapp',
            items: [
                {
                    label: 'Números',
                    icon: 'pi pi-phone',
                    routerLink: ['/whatsapp/numbers']
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-file-edit',
                    routerLink: ['/whatsapp/templates']
                },
                {
                    label: 'Credenciales Meta',
                    icon: 'pi pi-key',
                    routerLink: ['/whatsapp/meta']
                }
            ]
        },

        {
            label: 'Campañas',
            icon: 'pi pi-megaphone',
            items: [
                {
                    label: 'Listado',
                    icon: 'pi pi-list',
                    routerLink: ['/campaigns']
                },
                {
                    label: 'Administrador',
                    icon: 'pi pi-cog',
                    routerLink: ['/campaigns/manager']
                },
                {
                    label: 'Prospectos',
                    icon: 'pi pi-users',
                    routerLink: ['/campaigns/prospects']
                }
            ]
        },

        {
            label: 'Clientes',
            icon: 'pi pi-users',
            routerLink: ['/clients']
        },

        {
            label: 'Perfiles',
            icon: 'pi pi-shield',
            routerLink: ['/profiles']
        },

        {
            label: 'Cerrar sesión',
            icon: 'pi pi-sign-out',
            command: () => {
                console.log("Logout");
            }
        }
    ];

}
