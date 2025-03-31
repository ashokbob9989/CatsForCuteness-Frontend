import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopShowcaseComponent } from './shop-showcase.component';

describe('ShopShowcaseComponent', () => {
  let component: ShopShowcaseComponent;
  let fixture: ComponentFixture<ShopShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
