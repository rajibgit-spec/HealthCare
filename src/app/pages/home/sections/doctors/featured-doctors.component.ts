import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HealthcareDataService } from '../../../../services/healthcare-data.service';

@Component({ selector: 'app-featured-doctors', standalone: true, imports: [RouterLink], template: `<section class="content-section"><div class="section-heading"><div><span class="eyebrow">Featured doctors</span><h2>Find the Right Doctor for You</h2></div><a routerLink="/doctors">View All Doctors →</a></div><div class="doctor-grid">@for (doctor of data.doctors; track doctor.name) { <article class="doctor-card"><img [src]="doctor.image" [alt]="doctor.name" width="240" height="104" loading="lazy" decoding="async"><h3>{{ doctor.name }}</h3><strong>{{ doctor.specialty }}</strong><p>{{ doctor.experience }}</p><span class="rating">★ {{ doctor.rating }} <small>({{ doctor.reviews }})</small></span><a class="outline-button" routerLink="/appointments">＋ Book Appointment</a></article> }</div></section>` })
export class FeaturedDoctorsComponent { protected readonly data = inject(HealthcareDataService); }
