import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regEx = /.{6,}@gmail.(com|bg)/gm;
    if (control.value === "") return null;
    return regEx.test(control.value) ? null : { emailValidator: true }
  }
}
