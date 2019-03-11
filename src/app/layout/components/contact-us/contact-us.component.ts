import { Component, OnInit, InjectionToken, Inject, Optional, Host } from '@angular/core';

import {
  LocalStorageService,
  GeneratorService,
  ConfigOptionsService,
  ConstantsService,
  Sequence,
  SequenceNFactory
} from './../../../core/services';

import { TITLE } from './../../../shared/models';

const token = new InjectionToken<string>('token');

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    GeneratorService,
    { provide: token, useValue: TITLE },
    { provide: Sequence, useFactory: SequenceNFactory(15), deps: [GeneratorService] }
  ]
})
export class ContactUsComponent implements OnInit {
  title: any;

  constructor(
    @Inject(token) private constantsService: ConstantsService,
    @Host() @Optional() private localStorageService: LocalStorageService,
    private someStorage: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    @Inject(Sequence) private sequence: any[]
  ) { }

  ngOnInit() {
    this.testServices();
  }

  testServices() {
    this.title = this.constantsService;

    console.log(this.localStorageService ? 'localStorageService' : 'localStorageService is not found on host');

    this.configOptionsService.setLogin('someLogin');
    console.log(this.configOptionsService.getLogin());

    console.log(this.someStorage.getItem('angularVer'));
    this.someStorage.setItem('angularVer', '7.2.0');

    console.log(this.sequence);
  }
}
