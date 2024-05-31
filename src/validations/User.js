class UserValidations {
  CheckEmail(EmailFieldData) {
    let email = EmailFieldData.email;
    let password = EmailFieldData.password;

    if(!email || !password) {
      return null;
    }

    if(!email.includes('@')) {
      return 'Must be a valid email';
    }

    if(!email.includes('.com')) {
      return 'Must be a valid email';
    }

    return this.CheckPassword(EmailFieldData);
  }

  CheckPassword(PasswordFieldData) {
    if(typeof PasswordFieldData.password !== 'string') {
      return 'Password must be a string';
    }

    return null;
  }
}

export default new UserValidations();
