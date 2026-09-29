import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <footer class="site-footer"><div class="footer-main"><a class="brand footer-brand" routerLink="/"><span class="brand-mark">♥</span><span>HealthCare<span>+</span></span></a><p>Better Health. A Brighter Tomorrow.</p><nav aria-label="Footer navigation"><a routerLink="/">Home</a><a routerLink="/doctors">Find Doctors</a><a routerLink="/services">Services</a><a routerLink="/health-tips">Health Tips</a><a routerLink="/about">About Us</a></nav><div class="socials" aria-label="Social links"><a href="https://www.facebook.com" aria-label="Facebook">f</a><a href="https://www.instagram.com" aria-label="Instagram">◎</a><a href="https://www.youtube.com" aria-label="YouTube">▶</a><a href="https://www.linkedin.com" aria-label="LinkedIn">in</a></div></div><div class="footer-bottom"><span>© 2025 HealthCare+. All rights reserved.</span><span><a routerLink="/about">Privacy Policy</a> <a routerLink="/about">Terms &amp; Conditions</a></span></div></footer>@if (showMobileNav) { <nav class="mobile-bottom-nav" aria-label="Mobile tab navigation"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><span aria-hidden="true">⌂</span><small>Home</small></a><a routerLink="/doctors" routerLinkActive="active"><span aria-hidden="true">♙</span><small>Find Doctors</small></a><a routerLink="/services" routerLinkActive="active"><span aria-hidden="true">▦</span><small>Services</small></a><a routerLink="/appointments" routerLinkActive="active"><span aria-hidden="true">▣</span><small>Appointments</small></a><a routerLink="/more" routerLinkActive="active"><span aria-hidden="true">☰</span><small>More</small></a></nav> }
  `,
})
export class FooterComponent {
  @Input() showMobileNav = true;
}
