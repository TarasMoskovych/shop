import { Injectable } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';

@Injectable({
  providedIn: CoreModule
})
export class GeneratorService {

  constructor() { }

  generate(value: number) {
    const random = [
      () => Math.floor(Math.random() * (57 - 48)) + 48,  // digits
      () => Math.floor(Math.random() * (122 - 97)) + 97, // small letters
      () => Math.floor(Math.random() * (90 - 65)) + 65,  // big letters
    ];

    const s = [];

    for (let i = 0; i < value; i++) {
      s.push(String.fromCharCode(random[Math.floor(Math.random() * random.length)]()));
    }

    return s.join('');
  }
}
