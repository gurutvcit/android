import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainactivityPage } from './mainactivity.page';

describe('MainactivityPage', () => {
  let component: MainactivityPage;
  let fixture: ComponentFixture<MainactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainactivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
