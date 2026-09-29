import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HomePage], providers: [provideRouter([])] }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
  });

  it('renders each major home section as a standalone component', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('app-header')).toBeTruthy();
    expect(element.querySelector('app-hero')).toBeTruthy();
    expect(element.querySelector('app-features')).toBeTruthy();
    expect(element.querySelector('app-services')).toBeTruthy();
    expect(element.querySelector('app-featured-doctors')).toBeTruthy();
    expect(element.querySelector('app-nearby-healthcare')).toBeTruthy();
    expect(element.querySelector('app-health-tips')).toBeTruthy();
    expect(element.querySelector('app-mobile-app-promotion')).toBeTruthy();
    expect(element.querySelector('app-testimonials')).toBeTruthy();
    expect(element.querySelector('app-footer')).toBeTruthy();
  });
});
