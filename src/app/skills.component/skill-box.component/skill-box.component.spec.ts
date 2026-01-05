import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBox } from './skill-box';

describe('SkillBox', () => {
  let component: SkillBox;
  let fixture: ComponentFixture<SkillBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
