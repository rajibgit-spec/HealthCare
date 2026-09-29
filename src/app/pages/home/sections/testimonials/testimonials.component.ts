import { Component, inject } from '@angular/core';
import { HealthcareDataService } from '../../../../services/healthcare-data.service';

@Component({ selector: 'app-testimonials', standalone: true, template: `<section class="content-section testimonials"><div class="section-heading"><div><span class="eyebrow">What our patients say</span><h2>Trusted by Millions</h2></div><a href="#testimonials">View More Reviews →</a></div><div class="testimonial-grid">@for (item of data.testimonials; track item.name) { <article class="testimonial"><div class="patient"><img [src]="item.image" [alt]="item.name" width="80" height="80" loading="lazy" decoding="async"><div><strong>{{ item.name }}</strong><small>{{ item.location }}</small></div></div><p>“{{ item.quote }}”</p><span class="rating">★★★★★ <small>{{ item.rating }}</small></span></article> }</div></section>` })
export class TestimonialsComponent { protected readonly data = inject(HealthcareDataService); }
