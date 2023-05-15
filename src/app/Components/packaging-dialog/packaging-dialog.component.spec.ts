import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingDialogComponent } from './packaging-dialog.component';

describe('PackagingDialogComponent', () => {
  let component: PackagingDialogComponent;
  let fixture: ComponentFixture<PackagingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
