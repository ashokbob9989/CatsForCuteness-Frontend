import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buy-cat.component.html',
  styleUrl: './buy-cat.component.scss'
})
export class BuyCatComponent {
  searchTerm = '';
  selectedBehavior = '';
  selectedBreed = '';
  selectedGender = '';
  selectedHealth = '';
  selectedSize = '';
  sortOption = '';

  currentPage = 1;
  itemsPerPage = 20;

  selectedCat: any = null;

  behaviors = ['Playful', 'Calm', 'Curious', 'Lazy', 'Angry', 'Innocent'];
  breeds = ['Persian', 'Siamese', 'Bengal', 'Maine Coon', 'Siberian'];
  healthStatuses = ['Healthy', 'Special Needs', 'Vaccinated'];
  sizes = ['Small', 'Medium', 'Large'];

  cats: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  adoptCat(cat: any){
    this.router.navigate(['/order'], {state: {cat}});
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/all_cat_breeds_72.json').subscribe({
      next: (data) => {
        this.cats = data.map(cat => ({
          ...cat,
          inWishlist: false,
          isLiked: false
        }));
        this.breeds = [...new Set(data.map(cat => cat.breed))].sort();
      },
      error: (err) => {
        console.error('Error loading cat data', err);
      }
    });
  }

  get filteredCats() {
    return this.cats
      .filter(cat =>
        (!this.searchTerm || cat.name.toLowerCase().includes(this.searchTerm.toLowerCase())
         || cat.breed.toLowerCase().includes(this.searchTerm.toLowerCase())
         || cat.behavior.toLowerCase().includes(this.searchTerm.toLowerCase()))
        && (!this.selectedBreed || cat.breed === this.selectedBreed)
        && (!this.selectedBehavior || cat.behavior === this.selectedBehavior)
        && (!this.selectedGender || cat.gender === this.selectedGender)
        && (!this.selectedHealth || cat.healthStatus === this.selectedHealth)
        && (!this.selectedSize || cat.size === this.selectedSize)
      )
      .sort((a, b) => {
        switch (this.sortOption) {
          case 'price': return a.price - b.price;
          case 'age': return a.age - b.age;
          case 'rating': return b.rating - a.rating;
          default: return 0;
        }
      });
  }

  paginatedCats() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCats.slice(start, start + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.filteredCats.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  toggleWishlist(cat: any) {
    cat.inWishlist = !cat.inWishlist;
    if (cat.inWishlist) {
      alert(`${cat.name} has been added to your wishlist!`);
    } else {
      alert(`${cat.name} has been removed from your wishlist.`);
    }
  }

  viewDetails(cat: any) {
    this.selectedCat = cat;
  }

  likeCat(cat: any) {
    cat.isLiked = !cat.isLiked;
    if (cat.isLiked) {
      alert(`You liked ${cat.name}!`);
    } else {
      alert(`You unliked ${cat.name}.`);
    }
  }
}
