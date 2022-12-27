import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjesorgulaComponent } from './projesorgula.component';

describe('ProjesorgulaComponent', () => {
  let component: ProjesorgulaComponent;
  let fixture: ComponentFixture<ProjesorgulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjesorgulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjesorgulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
