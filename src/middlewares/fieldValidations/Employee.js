/* eslint-disable default-case */
class UserValidations {
  CheckEmail(EmailFieldData, isLog, isUpdate) {
    const { email } = EmailFieldData;
    const { password } = EmailFieldData;

    switch (true) {
      case (!email || !password):
        return null;

      case (!email.includes('@')):
        return 'Must be a valid email';

      case (!email.includes('.com')):
        return 'Must be a valid email';

      case (isLog === true):
        return true;

      case (isUpdate === true && !email):
        return this.CheckPassword(EmailFieldData);
    }

    return this.CheckPassword(EmailFieldData);
  }

  CheckPassword(PasswordFieldData, isUpdate) {
    if (isUpdate === true && !PasswordFieldData.password) {
      return this.CheckPermission(PasswordFieldData);
    }

    if (typeof PasswordFieldData.password !== 'string') {
      return 'Password must be a string';
    }

    return this.CheckPermission(PasswordFieldData);
  }

  CheckPermission(PermissionFieldData, isUpdate) {
    const alphabetRegex = /^[a-zA-Z]+$/;

    switch (true) {
      case isUpdate === true && !PermissionFieldData.permission:
        return null;

      case typeof PermissionFieldData.permission !== 'string':
        return 'Permission must be a string';

      case !(alphabetRegex.test(PermissionFieldData.permission)):
        return 'Permission must be a string';
    }

    if (PermissionFieldData.permission !== process.env.INPUTS_PERMISSION
        && PermissionFieldData.permission !== process.env.OUTPUTS_PERMISSION
        && PermissionFieldData.permission !== process.env.ADMIN_PERMISSION
    ) {
      return 'Invalid permission';
    }

    return null;
  }
}

export default new UserValidations();
