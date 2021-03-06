import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmenuComponent } from './vmenu.component';

describe('VmenuComponent', () => {
  let component: VmenuComponent;
  let fixture: ComponentFixture<VmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
