import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2C5MercadoriaComponent } from './t1-c2-c5-mercadoria.component';

describe('T1C2C5MercadoriaComponent', () => {
  let component: T1C2C5MercadoriaComponent;
  let fixture: ComponentFixture<T1C2C5MercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2C5MercadoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2C5MercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
