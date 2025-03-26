"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable default-case */
class UserValidations {
  CheckEmail(EmailFieldData, isLog, isUpdate) {
    const { email } = EmailFieldData;
    const { password } = EmailFieldData;

    switch (true) {
      case (isUpdate === true && (!email || !password)):
        return this.CheckName(EmailFieldData, isUpdate);

      case (!email.includes('@')):
        return 'Must be a valid email';

      case (!email.includes('.com')):
        return 'Must be a valid email';

      case (isLog === true):
        return true;
    }

    return this.CheckName(EmailFieldData, isUpdate);
  }

  CheckName(NameFieldData, isUpdate) {
    if (isUpdate === true && !NameFieldData.name) {
      return this.CheckPassword(NameFieldData, isUpdate);
    }

    if (NameFieldData.name.length < 3) {
      return 'Name is too short';
    }

    return this.CheckPassword(NameFieldData, isUpdate);
  }

  CheckPassword(PasswordFieldData, isUpdate) {
    if (isUpdate === true && !PasswordFieldData.password) {
      return this.CheckAdminPassword(PasswordFieldData, isUpdate);
    }

    if (typeof PasswordFieldData.password !== 'string') {
      return 'Password must be a string';
    }

    if (PasswordFieldData.password.length < 8) {
      return 'Password is too short';
    }

    return this.CheckAdminPassword(PasswordFieldData, isUpdate);
  }

  CheckAdminPassword(AdminPasswordFieldData, isUpdate) {
    if (isUpdate === true && !AdminPasswordFieldData.adminpassword) {
      return this.CheckPermission(AdminPasswordFieldData, isUpdate);
    }

    if (typeof AdminPasswordFieldData.adminpassword !== 'string') {
      return 'Admin password must be a string';
    }

    if (AdminPasswordFieldData.adminpassword.length < 8) {
      return 'Admin password is too short';
    }

    return this.CheckEmailReceiverAuthorization(AdminPasswordFieldData, isUpdate);
  }

  CheckEmailReceiverAuthorization(CheckERAFieldData, isUpdate) {
    if (isUpdate === true && !CheckERAFieldData.address_allowed) {
      return this.CheckPermission(CheckERAFieldData, isUpdate);
    }

    if (typeof CheckERAFieldData.address_allowed !== 'string') {
      return 'CheckERA must be a string';
    }
    console.log(CheckERAFieldData.address_allowed !== process.env.ADRRESS_ALLOWED
      && CheckERAFieldData.address_allowed !== process.env.ADRRESS_NOT_ALLOWED);

    if (CheckERAFieldData.address_allowed !== process.env.ADDRESS_ALLOWED
       && CheckERAFieldData.address_allowed !== process.env.ADDRESS_NOT_ALLOWED) {
      return 'CheckERA doesnt fit';
    }

    return this.CheckPermission(CheckERAFieldData, isUpdate);
  }

  CheckPermission(PermissionFieldData, isUpdate) {
    switch (true) {
      case isUpdate === true && !PermissionFieldData.permission:
        return null;

      case typeof PermissionFieldData.permission !== 'string':
        return 'Permission must be a string';
    }

    if (PermissionFieldData.permission !== process.env.INPUTS_PERMISSION
        && PermissionFieldData.permission !== process.env.OUTPUTS_PERMISSION
        && PermissionFieldData.permission !== process.env.ADMIN_PERMISSION
        && PermissionFieldData.permission !== process.env.INPUTS_OUTPUTS_PERMISSION
        && PermissionFieldData.permission !== process.env.SALES_PERMISSION
        && PermissionFieldData.permission !== process.env.SO_PERMISSION
        && PermissionFieldData.permission !== process.env.SOI_PERMISSION
    ) {
      return 'Invalid permission';
    }

    return null;
  }
}

exports. default = new UserValidations();
