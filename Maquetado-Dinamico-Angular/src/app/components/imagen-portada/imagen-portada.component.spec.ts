import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPortadaComponent } from './imagen-portada.component';

describe('ImagenPortadaComponent', () => {
  let component: ImagenPortadaComponent;
  let fixture: ComponentFixture<ImagenPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenPortadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
