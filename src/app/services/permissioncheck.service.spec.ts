import { TestBed } from '@angular/core/testing';

import { PermissioncheckService } from './permissioncheck.service';

describe('PermissioncheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissioncheckService = TestBed.get(PermissioncheckService);
    expect(service).toBeTruthy();
  });
});
