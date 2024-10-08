"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable default-case */
class UserValidations {
  CheckEmail(EmailFieldData, isLog) {
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
    }

    return this.CheckPassword(EmailFieldData);
  }

  CheckPassword(PasswordFieldData) {
    if (typeof PasswordFieldData.password !== 'string') {
      return 'Password must be a string';
    }

    return this.CheckPermission(PasswordFieldData);
  }

  CheckPermission(PermissionFieldData) {
    if (typeof PermissionFieldData.permission !== 'string') {
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

exports. default = new UserValidations();
