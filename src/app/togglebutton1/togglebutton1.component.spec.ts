import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Togglebutton1Component } from './togglebutton1.component';

describe('Togglebutton1Component', () => {
  let component: Togglebutton1Component;
  let fixture: ComponentFixture<Togglebutton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Togglebutton1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Togglebutton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
