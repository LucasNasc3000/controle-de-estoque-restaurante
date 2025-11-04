"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Advices = require('./Advices'); var _Advices2 = _interopRequireDefault(_Advices);
var _CommonValidations = require('./CommonValidations'); var _CommonValidations2 = _interopRequireDefault(_CommonValidations);
var _Employee = require('./Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Inputs = require('./Inputs'); var _Inputs2 = _interopRequireDefault(_Inputs);
var _Logs = require('./Logs'); var _Logs2 = _interopRequireDefault(_Logs);
var _Outputs = require('./Outputs'); var _Outputs2 = _interopRequireDefault(_Outputs);
var _Sales = require('./Sales'); var _Sales2 = _interopRequireDefault(_Sales);

class Validation {
  MainValidations(data, isEmployee, isLog, isSale, isUpdate) {
    const validations = _CommonValidations2.default.DoTheValidations(
      data,
      isEmployee,
      isLog,
      isSale,
      isUpdate,
    );

    switch (validations) {
      case 'Empty field(s)':
        return 'Um ou mais campos não foi preenchido';

      case 'Null field(s)':
        return 'Um ou mais campos é null';

      case 'Undefined fields':
        return 'Um ou mais campos é undefined';

      case 'Type must be a number':
        return 'O tipo deve ser numérico';

<<<<<<< HEAD
      case 'Type must be a string':
=======
      case ('Type must be a string'):
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
        return 'O tipo precisa estar em formato de texto';

      case 'employee_id must be a uuid':
        return 'O id do funcionário deve ser um uuid';

      default:
        return null;
    }
  }

  InputsValidation(data) {
    const inputValidations = _Inputs2.default.CheckIntegers(data);

    switch (inputValidations) {
<<<<<<< HEAD
      case 'Quantity must be a integer':
        return 'O campo "quantidade" deve ser um número inteiro';

      case 'Minimun_quantity must be a integer':
        return 'O campo "minimun_quantity" deve ser um número inteiro';

      case 'Supplier must be a string':
=======
      case ('Quantity must be a integer'):
        return 'O campo "quantidade" deve ser um número inteiro';

      case ('minimun_quantity must be a integer'):
        return 'O campo "minimun_quantity" deve ser um número inteiro';

      case ('Supplier must be a string'):
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
        return 'O campo "fornecedor" precisa estar em formato de texto';

      case 'Fields must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'Price must be a decimal positive type':
        return 'O campo "preço" precisa ser do tipo decimal';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'Totalweight must be a decimal positive type':
        return 'O campo "peso total" precisa ser do tipo decimal e positivo';

      case 'Weightperunit must be a decimal positive type':
        return 'O campo "peso unitário" precisa ser do tipo decimal e positivo';

      case 'Totalweight per register must be a decimal positive type':
        return 'O campo "peso total do registro" precisa ser do tipo decimal positivo';

      case 'Total price must be a decimal positive type':
        return 'O campo "preço total" precisa ser do tipo decimal positivo';

      case 'Reason must be an alphabet string':
        return 'O campo "motivo" precisa estar no formato de texto';

      case 'Category must be an alphabet string':
        return 'O campo "categoria" precisa estar no formato de texto';

      case 'Name must be an alphabet string':
        return 'O campo "nome" precisa estar no formato de texto';

      default:
        return null;
    }
  }

  OutputsValidation(data) {
    const outputsValidations = _Outputs2.default.CheckIntegers(data);

    switch (outputsValidations) {
<<<<<<< HEAD
      case 'Unities must be a integer':
        return 'O campo "unidades" deve ser um número inteiro';

      case 'Weight must be a number':
=======
      case ('Unities must be a integer'):
        return 'O campo "unidades" deve ser um número inteiro';

      case ('Weight must be a number'):
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
        return 'O campo "peso" precisa estar em formato de texto';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'Reason must be an alphabet string':
        return 'O campo "motivo" precisa estar no formato de texto';

      case 'Name must be an alphabet string':
        return 'O campo "nome" precisa estar no formato de texto';

      case 'Category must be an alphabet string':
        return 'O campo "categoria" precisa estar no formato de texto';

      default:
        return null;
    }
  }

  EmployeeValidation(data, islog, isUpdate) {
    const employeesValidation = _Employee2.default.CheckEmail(data, islog, isUpdate);

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
<<<<<<< HEAD
=======

      case 'CheckERA must be a string':
        return 'A autorização para receber e-mails precisa estar em formato de texto';

      case 'CheckERA doesnt fit':
        return 'A autorização para receber e-mails não corresponde com as definições';

      case 'Admin password must be a string':
        return 'A senha do admin precisa estar em formato de texto';

      case 'Invalid permission':
        return 'A permissão não corresponde com as definições';
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9
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
        return 'O id do log precisa estar em formato de texto';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';
    }

    if (emailValidation === 'Must be a valid email') return 'Email inválido';
  }

  SalesValidation(data) {
    const salesValidation = _Sales2.default.CheckPersonalAndSalesData(data);
<<<<<<< HEAD
    console.log(salesValidation);
=======
>>>>>>> da0b638e2fb708fcbf35744bbead69d63c9fbbc9

    switch (salesValidation) {
      case 'Type must be a string':
        return 'O id do log precisa estar em formato de texto';

      case 'Field(s) must be a date or hour string':
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      case 'id must be a uuid':
        return 'O id deve ser um uuid';

      case 'address must be a string':
        return 'O endereço precisa estar em formato de texto';

      case 'client_name must be a alphabet string':
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
    const advicesValidation = _Advices2.default.CheckDatesAndHour(data);

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

exports. default = new Validation();
