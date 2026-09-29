import { Routes } from '@angular/router';
export const routes: Routes = [
	{ path: '', loadComponent: () => import('./pages/home/home.page').then(({ HomePage }) => HomePage), title: 'HealthCare+ | Your Health, Our Priority' },
	{ path: 'doctors', loadComponent: () => import('./pages/placeholder/placeholder.page').then(({ PlaceholderPage }) => PlaceholderPage), title: 'Find Doctors | HealthCare+' },
	{ path: 'services', loadComponent: () => import('./pages/placeholder/placeholder.page').then(({ PlaceholderPage }) => PlaceholderPage), title: 'Services | HealthCare+' },
	{ path: 'health-tips', loadComponent: () => import('./pages/placeholder/placeholder.page').then(({ PlaceholderPage }) => PlaceholderPage), title: 'Health Tips | HealthCare+' },
	{ path: 'about', loadComponent: () => import('./pages/placeholder/placeholder.page').then(({ PlaceholderPage }) => PlaceholderPage), title: 'About Us | HealthCare+' },
	{ path: 'appointments', loadComponent: () => import('./pages/placeholder/placeholder.page').then(({ PlaceholderPage }) => PlaceholderPage), title: 'Appointments | HealthCare+' },
	{ path: 'more', loadComponent: () => import('./pages/more/more.page').then(({ MorePage }) => MorePage), title: 'More | HealthCare+' },
	{ path: '**', redirectTo: '' },
];
