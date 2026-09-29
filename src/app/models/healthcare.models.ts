export interface NavItem {
  label: string;
  route: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  rating: string;
  reviews: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: string;
  image: string;
}

export interface HealthTip {
  title: string;
  category: string;
  description: string;
  image: string;
}
