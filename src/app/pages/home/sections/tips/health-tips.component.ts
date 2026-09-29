import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HealthcareDataService } from '../../../../services/healthcare-data.service';

@Component({ selector: 'app-health-tips', standalone: true, imports: [RouterLink], template: `<section class="content-section tips-section"><div class="section-heading"><div><span class="eyebrow">Health tips</span><h2>Small steps, healthier life</h2></div><a routerLink="/health-tips">View All Tips →</a></div><div class="tips-grid">@for (tip of data.healthTips; track tip.title) { <article class="tip-card"><img [src]="tip.image" [alt]="tip.title" width="500" height="125" loading="lazy" decoding="async"><div><span>{{ tip.category }}</span><h3>{{ tip.title }}</h3><p>{{ tip.description }}</p><a routerLink="/health-tips">Read more →</a></div></article> }</div></section>` })
export class HealthTipsComponent { protected readonly data = inject(HealthcareDataService); }
