import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortProfile } from './short-profile';

describe('ShortProfile', () => {
  let component: ShortProfile;
  let fixture: ComponentFixture<ShortProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
