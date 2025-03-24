"use strict";Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line no-useless-escape
 const dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/; exports.dateRegex = dateRegex;
 const hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]+:(0?[0-9]|[1-5][0-9])/; exports.hourRegex = hourRegex;
 const dateAndHourErrorMsg = 'Field(s) must be a date or hour string'; exports.dateAndHourErrorMsg = dateAndHourErrorMsg;
 const uuidCheck = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i; exports.uuidCheck = uuidCheck;
 const alphabetRegex = /^[a-zA-Z]+$/; exports.alphabetRegex = alphabetRegex;
