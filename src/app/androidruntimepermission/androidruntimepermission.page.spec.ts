import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndroidruntimepermissionPage } from './androidruntimepermission.page';

describe('AndroidruntimepermissionPage', () => {
  let component: AndroidruntimepermissionPage;
  let fixture: ComponentFixture<AndroidruntimepermissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidruntimepermissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidruntimepermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
