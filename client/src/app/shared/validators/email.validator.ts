import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regEx = /.{6,}@gmail.(com|bg)/gm;
    return regEx.test(control.value) ? { email: { value: control.value } } : null
  }
}
