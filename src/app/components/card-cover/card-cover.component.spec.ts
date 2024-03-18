import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoverComponent } from './card-cover.component';

describe('CardCoverComponent', () => {
  let component: CardCoverComponent;
  let fixture: ComponentFixture<CardCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCoverComponent]
    });
    fixture = TestBed.createComponent(CardCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
