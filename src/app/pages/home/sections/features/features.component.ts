import { Component, inject } from '@angular/core';
import { HealthcareDataService } from '../../../../services/healthcare-data.service';

@Component({ selector: 'app-features', standalone: true, template: `<section class="features section-pad" aria-label="HealthCare+ benefits">@for (feature of data.features; track feature.title) { <article class="feature"><span class="feature-icon" aria-hidden="true">{{ feature.icon }}</span><h3>{{ feature.title }}</h3><p>{{ feature.description }}</p></article> }</section>` })
export class FeaturesComponent { protected readonly data = inject(HealthcareDataService); }
