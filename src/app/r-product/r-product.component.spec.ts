import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RProductComponent } from './r-product.component';

describe('RProductComponent', () => {
  let component: RProductComponent;
  let fixture: ComponentFixture<RProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
