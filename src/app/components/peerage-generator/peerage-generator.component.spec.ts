import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerageGeneratorComponent } from './peerage-generator.component';

describe('PeerageGeneratorComponent', () => {
  let component: PeerageGeneratorComponent;
  let fixture: ComponentFixture<PeerageGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerageGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeerageGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
