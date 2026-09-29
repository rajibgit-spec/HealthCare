import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HealthcareDataService } from '../../../../services/healthcare-data.service';

@Component({ selector: 'app-services', standalone: true, imports: [RouterLink], template: `<section class="services-band"><div class="services-intro"><span class="eyebrow">Our services</span><h2>Comprehensive Care<br>for You and Your Family</h2><p>From routine checkups to specialized treatments, we're here at every step of your health journey.</p><a class="button" routerLink="/services">Explore All Services <span aria-hidden="true">→</span></a></div><div class="service-grid">@for (service of data.services; track service.title) { <article class="service-card"><span class="service-icon" aria-hidden="true">{{ service.icon }}</span><h3>{{ service.title }}</h3><p>{{ service.description }}</p></article> }</div></section>` })
export class ServicesComponent { protected readonly data = inject(HealthcareDataService); }
