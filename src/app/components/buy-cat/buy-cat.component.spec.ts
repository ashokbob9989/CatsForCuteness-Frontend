import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCatComponent } from './buy-cat.component';

describe('BuyCatComponent', () => {
  let component: BuyCatComponent;
  let fixture: ComponentFixture<BuyCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
