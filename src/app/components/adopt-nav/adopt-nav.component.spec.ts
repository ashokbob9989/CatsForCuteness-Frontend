import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptNavComponent } from './adopt-nav.component';

describe('AdoptNavComponent', () => {
  let component: AdoptNavComponent;
  let fixture: ComponentFixture<AdoptNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
