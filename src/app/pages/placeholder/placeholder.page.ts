import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({ selector: 'app-placeholder', standalone: true, imports: [RouterLink, HeaderComponent, FooterComponent], template: `<app-header /><main class="placeholder-page"><span class="eyebrow">HealthCare+</span><h1>This page is coming soon</h1><p>We're preparing a better way to help you manage your health journey.</p><a class="button" routerLink="/">Back to Home</a></main><app-footer />` })
export class PlaceholderPage {}
