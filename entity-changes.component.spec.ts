import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityChangesComponent } from './entity-changes.component';

describe('EntityChangesComponent', () => {
  let component: EntityChangesComponent;
  let fixture: ComponentFixture<EntityChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityChangesComponent]
    });
    fixture = TestBed.createComponent(EntityChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
