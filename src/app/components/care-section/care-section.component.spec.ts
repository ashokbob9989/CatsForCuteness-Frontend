import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareSectionComponent } from './care-section.component';

describe('CareSectionComponent', () => {
  let component: CareSectionComponent;
  let fixture: ComponentFixture<CareSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
