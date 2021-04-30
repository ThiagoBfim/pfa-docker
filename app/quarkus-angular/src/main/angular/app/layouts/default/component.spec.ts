import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutComponent } from './component';

/**
 * Unit tests for {@see DefaultLayoutComponent}.
 */
describe('DefaultComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
