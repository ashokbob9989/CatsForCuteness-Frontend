import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunCommunitySectionComponent } from './fun-community-section.component';

describe('FunCommunitySectionComponent', () => {
  let component: FunCommunitySectionComponent;
  let fixture: ComponentFixture<FunCommunitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunCommunitySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunCommunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
