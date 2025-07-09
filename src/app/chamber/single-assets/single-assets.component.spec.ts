import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAssetsComponent } from './single-assets.component';

describe('SingleAssetsComponent', () => {
  let component: SingleAssetsComponent;
  let fixture: ComponentFixture<SingleAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
