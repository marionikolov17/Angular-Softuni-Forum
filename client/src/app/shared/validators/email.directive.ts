import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control)
    const regEx = /.{6,}@gmail.(com|bg)/gm;
    if (control.value === "") return null;
    return regEx.test(control.value) ? null : { emailValidator: true }
  }

  constructor() { }
}
