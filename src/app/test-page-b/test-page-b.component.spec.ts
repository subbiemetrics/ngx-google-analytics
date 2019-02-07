import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageBComponent } from './test-page-b.component';

describe('TestPageBComponent', () => {
  let component: TestPageBComponent;
  let fixture: ComponentFixture<TestPageBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
