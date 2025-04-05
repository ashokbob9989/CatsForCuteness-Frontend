import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunNavComponent } from './fun-nav.component';

describe('FunNavComponent', () => {
  let component: FunNavComponent;
  let fixture: ComponentFixture<FunNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
