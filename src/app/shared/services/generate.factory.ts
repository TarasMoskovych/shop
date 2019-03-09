import { InjectionToken } from '@angular/core';

import { GeneratorService } from './generator.service';

export const Sequence = new InjectionToken<any[]>('Sequence');

export function SequenceNFactory(take: number) {
  return ((generatorService: GeneratorService): string => {
    return generatorService.generate(take);
  });
}
