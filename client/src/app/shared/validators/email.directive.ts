import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regEx = /.{6,}@gmail.(com|bg)/gm;
    if (control.value === "") return null;
    return regEx.test(control.value) ? null : { emailValidator: true }
  }

  constructor() { }
}
