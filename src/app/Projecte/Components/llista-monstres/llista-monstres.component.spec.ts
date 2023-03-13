import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaMonstresComponent } from './llista-monstres.component';

describe('LlistaMonstresComponent', () => {
  let component: LlistaMonstresComponent;
  let fixture: ComponentFixture<LlistaMonstresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaMonstresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaMonstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
