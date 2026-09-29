import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HealthcareDataService } from '../../services/healthcare-data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<form class="search-form" (submit)="$event.preventDefault(); submit()" aria-label="Search healthcare providers"><span aria-hidden="true">⌕</span><input [formControl]="search" type="search" placeholder="Search symptoms, diseases, doctors, or specialties..." aria-label="Search symptoms, diseases, doctors, or specialties"><button class="button" type="submit">Search</button></form><div class="popular"><strong>Popular searches:</strong>@for (term of data.popularSearches; track term) { <button type="button" (click)="search.setValue(term); submit()">{{ term }}</button> }</div>`,
})
export class SearchComponent {
  protected readonly data = inject(HealthcareDataService);
  protected readonly search = new FormControl('', { nonNullable: true });
  protected submit(): void { this.data.updateSearchTerm(this.search.value.trim()); }
}
