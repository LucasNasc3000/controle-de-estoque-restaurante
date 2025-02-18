Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _CommonValidations = require('./CommonValidations');

const _CommonValidations2 = _interopRequireDefault(_CommonValidations);
const _Inputs = require('./Inputs');

const _Inputs2 = _interopRequireDefault(_Inputs);
const _Outputs = require('./Outputs');

const _Outputs2 = _interopRequireDefault(_Outputs);
const _Employee = require('./Employee');

const _Employee2 = _interopRequireDefault(_Employee);
const _Logs = require('./Logs');

const _Logs2 = _interopRequireDefault(_Logs);
const _Sales = require('./Sales');

const _Sales2 = _interopRequireDefault(_Sales);

class Validation {
  MainValidations(data, isEmployee, isLog, isSale) {
    const validations = _CommonValidations2.default.DoTheValidations(data, isEmployee, isLog, isSale);

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
        return 'O tipo deve ser string';

      case 'employee_id must be a uuid':
        return 'O id do funcionário deve ser um uuid';

      default:
        return null;
    }
  }

  InputsValidation(data) {
    const inputValidations = _Inputs2.default.CheckIntegers(data);

    switch (inputValidations) {
      case ('Quantity must be a number'):
        return 'O campo "quantidade" deve ser numérico';

      case ('minimun_quantity must be a number'):
        return 'O campo "minimun_quantity" deve ser numérico';

      case ('Supplier must be a string'):
        return 'O campo "fornecedor" precisa ser um string';

      case ('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  OutputsValidation(data) {
    const outputsValidations = _Outputs2.default.CheckIntegers(data);

    switch (outputsValidations) {
      case ('Unities must be a number'):
        return 'O campo "unidades" deve ser numérico';

      case ('Weight must be a number'):
        return 'O campo "peso" precisa ser um string';

      case ('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  EmployeeValidation(data) {
    const employeesValidation = _Employee2.default.CheckEmail(data);

    // eslint-disable-next-line default-case
    switch (employeesValidation) {
      case 'Must be a valid email':
        return 'Email inválido';

      case 'Password must be a string':
        return 'A senha precisa ser uma string';
    }

    return null;
  }

  // eslint-disable-next-line consistent-return
  LogsValidation(data) {
    const logsValidation = _Logs2.default.CheckEmployeeId(data);
    const emailValidation = _Employee2.default.CheckEmail(data, true);

    // eslint-disable-next-line default-case
    switch (logsValidation) {
      case 'Type must be a string':
        return 'O id do log precisa ser do tipo string';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';
    }

    if (emailValidation === 'Must be a valid email') {
      return 'Email inválido';
    }
  }

  SalesValidation(data) {
    const salesValidation = _Sales2.default.CheckIDs(data);

    switch (salesValidation) {
      case 'Type must be a string':
        return 'O id do log precisa ser do tipo string';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'id must be a uuid':
        return 'O id deve ser um uuid';

      case 'address must be a string':
        return 'O endereço deve ser uma string';

      case 'client_name must be a letters string':
        return 'O nome do cliente deve conter somente letras do alfabeto';

      case 'phone_number must be a phone number string':
        return 'O número de telefone deve ser uma string no formato XX-XXXX-XXXXX';

      case 'products must be a string':
        return 'Os produtos devem ser strings';

      default:
        return null;
    }
  }
}

exports.default = new Validation();
