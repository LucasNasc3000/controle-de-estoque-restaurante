"use strict";Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line import/prefer-default-export
 const ReplaceDot = (data) => {
  const toFindDotFields = data.map((element) => element.dataValues);

  const commaFields = [
    'price',
  ];

  // eslint-disable-next-line array-callback-return
  toFindDotFields.map((element) => {
    commaFields.forEach((subElement) => {
      if (element[subElement]) element[subElement] = element[subElement].replace('.', ',');
    });
  });

  return toFindDotFields;
}; exports.ReplaceDot = ReplaceDot;

 const InsertDot = (data) => {
  const commaFields = [
    'price',
  ];

  commaFields.forEach((element) => {
    if (data[element]) data[element] = data[element].replace(',', '.');
  });

  return data;
}; exports.InsertDot = InsertDot;

 const InsertDotForSearch = (data) => {
  const replaceComma = data.replace(',', '.');

  data = replaceComma;

  return data;
}; exports.InsertDotForSearch = InsertDotForSearch;
