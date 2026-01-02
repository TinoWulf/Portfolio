import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSheet } from './contact-sheet';

describe('ContactSheet', () => {
  let component: ContactSheet;
  let fixture: ComponentFixture<ContactSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
