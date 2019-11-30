import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemgroupPage } from './itemgroup.page';

describe('ItemgroupPage', () => {
  let component: ItemgroupPage;
  let fixture: ComponentFixture<ItemgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemgroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
