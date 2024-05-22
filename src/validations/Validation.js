import CommonValidations from "./CommonValidations"
import Inputs from "./Inputs";

class Validation {
  MainValidations(data) {
    const validations = CommonValidations.DoTheValidations(data);

    switch(validations) {
      case ('Empty Field(s)'):
        return 'Um ou mais campos não foi preenchido';

      case ('Undefined or null field(s)'):
        return 'Um ou mais campos é undefined ou null';

      case ('Type must be a number'):
        return 'O tipo deve ser numérico';

      case ('Type must be a string'):
        return 'O tipo deve ser string';

      case ('Field(s) must be a date or hour string'):
        return 'Um ou mais campos precisam ser uma data ou hora em formato de texto --> hh:mm:ss dd-mm-yyyy';

      default:
        return null;
    }
  }

  InputsValidation(data) {
    if(!data.supplier || !data.entrydate) {
      return 'Este método é para validar somente os inputs ou o fornecedor ou a data de entrada não foram informados'
    }

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
}

export default new Validation()
