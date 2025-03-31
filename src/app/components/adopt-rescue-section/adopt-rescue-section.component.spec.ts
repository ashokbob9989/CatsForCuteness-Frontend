import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptRescueSectionComponent } from './adopt-rescue-section.component';

describe('AdoptRescueSectionComponent', () => {
  let component: AdoptRescueSectionComponent;
  let fixture: ComponentFixture<AdoptRescueSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptRescueSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptRescueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
