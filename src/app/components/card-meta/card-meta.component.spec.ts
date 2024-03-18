import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMetaComponent } from './card-meta.component';

describe('CardMetaComponent', () => {
  let component: CardMetaComponent;
  let fixture: ComponentFixture<CardMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMetaComponent]
    });
    fixture = TestBed.createComponent(CardMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
