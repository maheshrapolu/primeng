import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownComponent } from './shown.component';

describe('ShownComponent', () => {
  let component: ShownComponent;
  let fixture: ComponentFixture<ShownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
