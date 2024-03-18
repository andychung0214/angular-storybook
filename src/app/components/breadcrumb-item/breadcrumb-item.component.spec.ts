import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbItemComponent } from './breadcrumb-item.component';

describe('BreadcrumbItemComponent', () => {
  let component: BreadcrumbItemComponent;
  let fixture: ComponentFixture<BreadcrumbItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbItemComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
