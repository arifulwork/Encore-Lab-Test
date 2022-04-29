import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicksumElementComponent } from './picksum-element.component';

describe('PicksumElementComponent', () => {
  let component: PicksumElementComponent;
  let fixture: ComponentFixture<PicksumElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicksumElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicksumElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
