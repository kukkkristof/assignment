import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveprojectsComponent } from './activeprojects.component';

describe('ActiveprojectsComponent', () => {
  let component: ActiveprojectsComponent;
  let fixture: ComponentFixture<ActiveprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveprojectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
