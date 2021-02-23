import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionresComponent } from './opinionres.component';

describe('OpinionresComponent', () => {
  let component: OpinionresComponent;
  let fixture: ComponentFixture<OpinionresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
