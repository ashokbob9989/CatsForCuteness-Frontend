import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCatComponent } from './hello-cat.component';

describe('HelloCatComponent', () => {
  let component: HelloCatComponent;
  let fixture: ComponentFixture<HelloCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
