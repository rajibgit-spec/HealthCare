import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-nearby-healthcare', standalone: true, imports: [RouterLink], template: `<section class="nearby content-section"><div><span class="eyebrow">Find care near you</span><h2>Healthcare that's closer to home</h2><p>Discover trusted hospitals, diagnostic centers, and labs in your neighborhood.</p></div><a class="button" routerLink="/services">Explore Nearby Care →</a></section>` })
export class NearbyHealthcareComponent {}
