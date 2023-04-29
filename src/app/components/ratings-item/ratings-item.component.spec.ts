import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsItemComponent } from './ratings-item.component';

describe('RatingsItemComponent', () => {
  let component: RatingsItemComponent;
  let fixture: ComponentFixture<RatingsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
