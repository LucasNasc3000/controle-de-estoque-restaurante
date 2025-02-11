import Advices from './Advices';
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
      case ('Quantity must be a integer'):
        return 'O campo "quantidade" deve ser um número inteiro';

      case ('minimun_quantity must be a integer'):
        return 'O campo "minimun_quantity" deve ser um número inteiro';

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
      case ('Unities must be a integer'):
        return 'O campo "unidades" deve ser um número inteiro';

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

      case 'Admin password is too short':
        return 'A senha do admin precisa ter pelo menos 8 caracteres';

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
    const salesValidation = Sales.CheckPersonalAndSalesData(data);

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
        return 'O número de telefone deve ser uma string no formato XX XXXXX-XXXX';

      case 'products must be a string':
        return 'Os produtos devem estar em formato de texto';

      case 'client btd must be a short date string':
        return 'O anv. do cliente precisa ser uma data no formato dd-mm';

      default:
        return null;
    }
  }

  AdvicesValidation(data) {
    const advicesValidation = Advices.CheckDatesAndHour(data);

    switch (advicesValidation) {
      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'sale_id must be a uuid string':
        return 'O id deve ser um uuid';

      case 'employee_id must be a uuid string':
        return 'O id do funcionário deve ser um uuid';

      case 'subject must be a string':
        return 'O assunto do email deve ser uma string';

      case 'email_body must be a string':
        return 'O corpo do email precisa ser uma string';

      case 'min-max length limit reached subject':
        return 'O assunto deve ter entre 10 e 50 caracteres';

      case 'min-max length limit reached email_body':
        return 'O corpo do e-mail deve ter entre 10 e 200 caracteres';

      default:
        return null;
    }
  }
}

export default new Validation();
