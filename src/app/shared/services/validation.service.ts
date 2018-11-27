export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      // tslint:disable-next-line:prefer-const
      let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      };

      return config[validatorName];
    }


    static emailValidator(control) {
      //
// tslint:disable-next-line:max-line-length
if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }

    static passwordValidator(control) {
      if (control.value.match(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=.*[!@#$%^&*]{1})\S{6,}$/)) {
        return null;
      } else {
        return { 'invalidPassword': true };
      }
    }
  }

