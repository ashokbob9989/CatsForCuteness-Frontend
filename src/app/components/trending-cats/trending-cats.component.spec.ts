import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCatsComponent } from './trending-cats.component';

describe('TrendingCatsComponent', () => {
  let component: TrendingCatsComponent;
  let fixture: ComponentFixture<TrendingCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
