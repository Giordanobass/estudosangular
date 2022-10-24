import { TestBed } from '@angular/core/testing';
import { CadastroModule } from './cadastro.module';

describe('CadastroModule', () => {
  let pipe: CadastroModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CadastroModule] });
    pipe = TestBed.inject(CadastroModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
