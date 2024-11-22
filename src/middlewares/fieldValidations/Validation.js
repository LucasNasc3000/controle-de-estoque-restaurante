import CommonValidations from './CommonValidations';
import Employee from './Employee';
import Inputs from './Inputs';
import Logs from './Logs';
import Outputs from './Outputs';
import Sales from './Sales';

class Validation {
  MainValidations(data, isEmployee, isLog, isSale, isUpdate) {
    const validations = CommonValidations.DoTheValidations(
      data,
      isEmployee,
      isLog,
      isSale,
      isUpdate,
    );

    switch (validations) {
      case ('Empty field(s)'):
        return 'Um ou mais campos não foi preenchido';

      case ('Null field(s)'):
        return 'Um ou mais campos é null';

      case ('Undefined field(s)'):
        return 'Um ou mais campos é undefined';

      case ('Type must be a number'):
        return 'O tipo deve ser numérico';

      case ('Type must be a string'):
        return 'O tipo precisa estar em formato de texto';

      case 'employee_id must be a uuid':
        return 'O id do funcionário deve ser um uuid';

      default:
        return null;
    }
  }

  InputsValidation(data) {
    const inputValidations = Inputs.CheckIntegers(data);

    switch (inputValidations) {
      case ('Quantity must be a number'):
        return 'O campo "quantidade" deve ser numérico';

      case ('minimun_quantity must be a number'):
        return 'O campo "minimun_quantity" deve ser numérico';

      case ('Supplier must be a string'):
        return 'O campo "fornecedor" precisa estar em formato de texto';

      case ('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  OutputsValidation(data) {
    const outputsValidations = Outputs.CheckIntegers(data);

    switch (outputsValidations) {
      case ('Unities must be a number'):
        return 'O campo "unidades" deve ser numérico';

      case ('Weight must be a number'):
        return 'O campo "peso" precisa estar em formato de texto';

      case ('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  EmployeeValidation(data, islog, isUpdate) {
    const employeesValidation = Employee.CheckEmail(data, islog, isUpdate);

    // eslint-disable-next-line default-case
    switch (employeesValidation) {
      case 'Must be a valid email':
        return 'Email inválido';

      case 'Password must be a string':
        return 'A senha precisa estar em formato de texto';

      case 'Permission must be a string':
        return 'A permissao precisa estar em formato de texto';

      case 'Password is too short':
        return 'A senha precisa ter pelo menos 8 caracteres';

      case 'Name is too short':
        return 'O nome precisa ter pelo menos 3 caracteres';
    }

    return null;
  }

  // eslint-disable-next-line consistent-return
  LogsValidation(data) {
    const logsValidation = Logs.CheckEmployeeId(data);
    const emailValidation = Employee.CheckEmail(data, true);

    // eslint-disable-next-line default-case
    switch (logsValidation) {
      case 'Type must be a string':
        return 'O id do log precisa estar em formato de texto';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';
    }

    if (emailValidation === 'Must be a valid email') {
      return 'Email inválido';
    }
  }

  SalesValidation(data) {
    const salesValidation = Sales.CheckIDs(data);

    console.log(salesValidation);

    switch (salesValidation) {
      case 'Type must be a string':
        return 'O id do log precisa estar em formato de texto';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'id must be a uuid':
        return 'O id deve ser um uuid';

      case 'address must be a string':
        return 'O endereço precisa estar em formato de texto';

      case 'client_name must be a letters string':
        return 'O nome do cliente deve conter somente letras do alfabeto';

      case 'phone_number must be a phone number string':
        return 'O número de telefone deve ser uma string no formato XX-XXXX-XXXXX';

      case 'products must be a string':
        return 'Os produtos devem estar em formato de texto';

      default:
        return null;
    }
  }
}

export default new Validation();
