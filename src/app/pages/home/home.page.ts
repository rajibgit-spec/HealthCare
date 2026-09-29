import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MobileAppPromotionComponent } from './sections/app-promotion/mobile-app-promotion.component';
import { FeaturedDoctorsComponent } from './sections/doctors/featured-doctors.component';
import { FeaturesComponent } from './sections/features/features.component';
import { HealthTipsComponent } from './sections/tips/health-tips.component';
import { HeroComponent } from './sections/hero/hero.component';
import { NearbyHealthcareComponent } from './sections/nearby/nearby-healthcare.component';
import { ServicesComponent } from './sections/services/services.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({ selector: 'app-home', standalone: true, imports: [HeaderComponent, HeroComponent, FeaturesComponent, ServicesComponent, FeaturedDoctorsComponent, NearbyHealthcareComponent, HealthTipsComponent, MobileAppPromotionComponent, TestimonialsComponent, FooterComponent], template: `<app-header /><main><app-hero /><app-features /><app-services /><app-featured-doctors /><app-nearby-healthcare /><app-health-tips /><app-mobile-app-promotion /><app-testimonials /></main><app-footer />` })
export class HomePage {}
