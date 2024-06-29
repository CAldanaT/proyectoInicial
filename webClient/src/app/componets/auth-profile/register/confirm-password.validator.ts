import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
  /**
   * Check matching password with confirm password
   * @param control AbstractControl
   */
  static MatchPassword(control: AbstractControl): void {
    const password = control.get('userPassword')?.value;
    const confirmPassword = control.get('cUserPassword')?.value;

    if (password !== confirmPassword) {
      control.get('cUserPassword')?.setErrors({ ConfirmPassword: true });
    }
  }
}
