import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C7MercadoriaComponent } from './t1-c7-mercadoria.component';

describe('T1C7MercadoriaComponent', () => {
  let component: T1C7MercadoriaComponent;
  let fixture: ComponentFixture<T1C7MercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C7MercadoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C7MercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
