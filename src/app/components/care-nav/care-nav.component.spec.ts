import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareNavComponent } from './care-nav.component';

describe('CareNavComponent', () => {
  let component: CareNavComponent;
  let fixture: ComponentFixture<CareNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
