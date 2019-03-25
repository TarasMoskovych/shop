import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static priceRule(c: AbstractControl): { [key: string]: boolean } | null {
    return checkPrice(c);
  }

  static priceRuleRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      return checkPrice(c, min, max);
    }
  }
}

export function checkPrice(c: AbstractControl, min: number = 1, max: number = 5): { [key: string]: boolean } | null {
  if (c.value !== undefined && (Number.isNaN(c.value) || c.value < min || c.value > max)) {
    return {
      priceRule: true
    };
  }
  return null;
}
