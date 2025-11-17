export const menu = [
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
        items: [
            {
                label: 'Clientes',
                icon: 'pi pi-users',
                routerLink: ['/clients']
            }
        ]
    },
    {
        label: 'Perfiles',
        items: [
            {
                label: 'Perfiles',
                icon: 'pi pi-shield',
                routerLink: ['/profiles']
            }
        ]
    },
    {
        label: 'Sesión',
        items: [
            {
                label: 'Cerrar sesión',
                icon: 'pi pi-sign-out',
                command: 'logout'
            }
        ]
    }
];
