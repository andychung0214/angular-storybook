import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionHeaderComponent } from './accordion-header.component';

describe('AccordionHeaderComponent', () => {
  let component: AccordionHeaderComponent;
  let fixture: ComponentFixture<AccordionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionHeaderComponent]
    });
    fixture = TestBed.createComponent(AccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
