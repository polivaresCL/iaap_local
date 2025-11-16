export const menu = [
    {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        routerLink: ['/dashboard']
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
        icon: 'pi pi-user',
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
            console.log('Logout');
        }
    }
];
