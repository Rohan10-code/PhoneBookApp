import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddUpdateComponent } from './contact-add-update.component';

describe('ContactAddUpdateComponent', () => {
  let component: ContactAddUpdateComponent;
  let fixture: ComponentFixture<ContactAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAddUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
