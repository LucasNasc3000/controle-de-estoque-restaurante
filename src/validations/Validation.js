import CommonValidations from "./CommonValidations"
import Inputs from "./Inputs";
import Outputs from "./Outputs";
import User from "./User";
import Logs from "./Logs";

class Validation {
  MainValidations(data, isUser, isLog) {
    const validations = CommonValidations.DoTheValidations(data, isUser, isLog);

    switch(validations) {
      case ('Empty field(s)'):
        return 'Um ou mais campos não foi preenchido';

      case ('Null field(s)'):
        return 'Um ou mais campos é null';

      case ('Undefined field(s)'):
        return 'Um ou mais campos é undefined';

      case ('Type must be a number'):
        return 'O tipo deve ser numérico';

      case ('Type must be a string'):
        return 'O tipo deve ser string';

      default:
        return null;
    }
  }

  InputsValidation(data) {
    const inputValidations = Inputs.CheckIntegers(data);

    switch(inputValidations) {
      case ('Quantity must be a number'):
        return 'O campo "quantidade" deve ser numérico';

      case('Supplier must be a string'):
        return 'O campo "fornecedor" precisa ser um string';

      case('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  OutputsValidation(data) {
    const outputsValidations = Outputs.CheckIntegers(data);

    switch(outputsValidations) {
      case ('Unities must be a number'):
        return 'O campo "unidades" deve ser numérico';

      case('Weight must be a number'):
        return 'O campo "peso" precisa ser um string';

      case('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  UserValidation(data) {
    const usersValidation = User.CheckEmail(data);

    switch(usersValidation) {
      case 'Must be a valid email':
        return 'Email inválido';

      case 'Password must be a string':
        return 'A senha precisa ser uma string';
    }

   return null;
  }

  LogsValidation(data) {
    const logsValidation = Logs.CheckUserId(data);
    const emailValidation = User.CheckEmail(data, true);

    switch(logsValidation) {
      case 'Type must be a string':
        return 'O id do log precisa ser do tipo string';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';
    }

    if(emailValidation === 'Must be a valid email') {
      return 'Email inválido';
    }
  }
}

export default new Validation();
