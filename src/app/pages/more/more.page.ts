import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  template: `<app-header /><main class="more-page"><a class="back-link" routerLink="/">←</a><span class="eyebrow">Explore HealthCare+</span><h1>More</h1><p>Explore more about HealthCare+, your trusted partner in better health.</p><section class="more-group"><span class="eyebrow">About HealthCare+</span><h2>♥ &nbsp; About HealthCare+</h2><div class="more-links"><a routerLink="/about">About Us <span>›</span></a><a routerLink="/about">Our Mission &amp; Vision <span>›</span></a><a routerLink="/doctors">Our Doctors <span>›</span></a><a routerLink="/about">Our Team <span>›</span></a><a routerLink="/services">Our Services <span>›</span></a><a routerLink="/about">Our Locations <span>›</span></a><a routerLink="/about">Careers <span>›</span></a><a routerLink="/health-tips">Blog <span>›</span></a></div></section><section class="more-group"><span class="eyebrow">Support</span><h2>◉ &nbsp; Support</h2><div class="more-links"><a routerLink="/about">Help Center <span>›</span></a><a routerLink="/about">FAQs <span>›</span></a><a routerLink="/appointments">Book an Appointment <span>›</span></a><a routerLink="/about">Live Chat <span>›</span></a><a routerLink="/about">Contact Us <span>›</span></a><a routerLink="/about">Feedback <span>›</span></a></div></section><section class="more-group"><span class="eyebrow">Legal</span><h2>▤ &nbsp; Legal</h2><div class="more-links"><a routerLink="/about">Terms &amp; Conditions <span>›</span></a><a routerLink="/about">Cookie Policy <span>›</span></a><a routerLink="/about">Privacy Policy <span>›</span></a><a routerLink="/about">Language <span>›</span></a></div></section><div class="support-callout"><strong>Need Assistance?</strong><p>Our support team is here to help you 24/7.</p><a class="outline-button" routerLink="/about">Contact Us</a></div></main><app-footer [showMobileNav]="false" />`
})
export class MorePage {}
