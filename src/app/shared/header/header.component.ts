import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HealthcareDataService } from '../../services/healthcare-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="HealthCare+ home"><span class="brand-mark">♥</span><span>HealthCare<span>+</span></span></a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        @for (item of data.navItems; track item.route) { <a [routerLink]="item.route" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.route === '/' }">{{ item.label }}</a> }
      </nav>
      <div class="header-actions"><button class="icon-button mobile-action" type="button" aria-label="Search">⌕</button><button class="icon-button notification-action" type="button" aria-label="Notifications">♧</button><a class="login-link" routerLink="/about">Login</a><a class="button button-small" routerLink="/appointments">Book Appointment</a><button class="menu-button" type="button" aria-label="Toggle navigation" (click)="menuOpen.set(!menuOpen())" [attr.aria-expanded]="menuOpen()">☰</button></div>
    </header>
    @if (menuOpen()) { <nav class="mobile-nav" aria-label="Mobile navigation">@for (item of data.navItems; track item.route) { <a [routerLink]="item.route" (click)="menuOpen.set(false)">{{ item.label }}</a> }<a routerLink="/appointments" (click)="menuOpen.set(false)">Book Appointment</a></nav> }
  `,
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);
  constructor(protected readonly data: HealthcareDataService) {}
}
