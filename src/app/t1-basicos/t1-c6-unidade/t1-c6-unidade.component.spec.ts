import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C6UnidadeComponent } from './t1-c6-unidade.component';

describe('T1C6UnidadeComponent', () => {
  let component: T1C6UnidadeComponent;
  let fixture: ComponentFixture<T1C6UnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C6UnidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C6UnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
