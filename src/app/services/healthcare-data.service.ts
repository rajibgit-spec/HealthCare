import { Injectable, signal } from '@angular/core';
import { Doctor, Feature, HealthTip, NavItem, ServiceCard, Testimonial } from '../models/healthcare.models';

@Injectable({ providedIn: 'root' })
export class HealthcareDataService {
  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'Find Doctors', route: '/doctors' },
    { label: 'Services', route: '/services' },
    { label: 'Health Tips', route: '/health-tips' },
    { label: 'About Us', route: '/about' },
  ];

  readonly popularSearches = ['Fever', 'Diabetes', 'Cardiologist', 'Dermatologist'];
  readonly searchTerm = signal('');

  readonly features: Feature[] = [
    { icon: '♙', title: 'Consult Specialists', description: 'Book appointments with top doctors near you.' },
    { icon: '◷', title: 'Get Quick Support', description: 'Instant online consultation and follow-ups.' },
    { icon: '♢', title: 'Trusted & Safe', description: 'Your data and health are always secure.' },
    { icon: '⌖', title: 'Nearby Hospitals', description: 'Find hospitals, labs and diagnostic centers.' },
    { icon: '▣', title: 'Health on the Go', description: 'Access your records, prescriptions and more.' },
  ];

  readonly services: ServiceCard[] = [
    { icon: '♧', title: 'General Medicine', description: 'Consultation & treatment for common illnesses' },
    { icon: '♙', title: 'Specialist Consultation', description: 'Cardiology, Dermatology, Ortho, and more' },
    { icon: '▯', title: 'Lab Tests', description: 'Accurate & reliable diagnostic tests' },
    { icon: '▣', title: 'Teleconsultation', description: 'See a doctor from the comfort of home' },
    { icon: '⌁', title: 'Vaccination', description: 'Stay protected for a healthier tomorrow' },
    { icon: '♡', title: 'Health Packages', description: 'Preventive care for long-term wellness' },
  ];

  readonly doctors: Doctor[] = [
    { name: 'Dr. Amit Sharma', specialty: 'Cardiologist', experience: '15+ years experience', rating: '4.8', reviews: '320 reviews', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=240&q=80' },
    { name: 'Dr. Priya Sen', specialty: 'Dermatologist', experience: '12+ years experience', rating: '4.7', reviews: '260 reviews', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=80' },
    { name: 'Dr. Rohan Gupta', specialty: 'Orthopedic Surgeon', experience: '10+ years experience', rating: '4.6', reviews: '210 reviews', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=240&q=80' },
    { name: 'Dr. Neha Verma', specialty: 'Gynecologist', experience: '8+ years experience', rating: '4.5', reviews: '180 reviews', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=240&q=80' },
  ];

  readonly testimonials: Testimonial[] = [
    { quote: 'The consultation was very smooth and the doctor was extremely helpful. The app is easy to use and saves a lot of time.', name: 'Sneha Roy', location: 'Kolkata', rating: '5.0', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80' },
    { quote: 'I found the right specialist quickly and the whole process was hassle-free. Highly recommended!', name: 'Arindam Basu', location: 'Howrah', rating: '4.8', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80' },
    { quote: 'Great service and very professional team. My family and I are using this platform regularly now.', name: 'Mousumi Das', location: 'Bardhaman', rating: '4.9', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80' },
  ];

  readonly healthTips: HealthTip[] = [
    { title: '5 ways to build healthier daily habits', category: 'Wellness', description: 'Small changes can make a lasting difference to your health.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=500&q=80' },
    { title: 'Understanding your heart health', category: 'Heart Care', description: 'Know the signs and simple ways to care for your heart.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80' },
    { title: 'A practical guide to better sleep', category: 'Lifestyle', description: 'A restful routine helps your mind and body recover.', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80' },
  ];

  updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }
}
