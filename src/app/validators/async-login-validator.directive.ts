import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';
import { AppSettingsService } from '../core/services';

@Directive({
  selector: '[appAsyncLoginValidator][formControlName], [appAsyncLoginValidator][ngModelGroup]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncLoginValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncLoginValidatorDirective implements Validator {
  constructor(private appSettingsService: AppSettingsService) {}

  validate(c: AbstractControl): Observable < {[key: string]: any}> {
    return this.validateAdminCredentials(c.value);
  }

  private validateAdminCredentials(value: { nameControl: string, passwordControl: string }) {
    return this.appSettingsService.getAdminCredentials()
      .pipe(
        switchMap(data => {
          if (data.login !== value.nameControl || data.password !== value.passwordControl) {
            return of({ asyncEmailInvalid: true });
          } else {
            return of(null);
          }
        }),
        delay(500)
      );
  }
}
