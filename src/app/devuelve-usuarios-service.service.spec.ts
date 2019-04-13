import { TestBed } from '@angular/core/testing';

import { DevuelveUsuariosServiceService } from './devuelve-usuarios-service.service';

describe('DevuelveUsuariosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevuelveUsuariosServiceService = TestBed.get(DevuelveUsuariosServiceService);
    expect(service).toBeTruthy();
  });
});
