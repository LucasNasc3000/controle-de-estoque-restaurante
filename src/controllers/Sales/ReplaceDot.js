// eslint-disable-next-line import/prefer-default-export
export const ReplaceDot = (data) => {
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
};

export const InsertDot = (data) => {
  const commaFields = [
    'price',
  ];

  commaFields.forEach((element) => {
    if (data[element]) data[element] = data[element].replace(',', '.');
  });

  return data;
};

export const InsertDotForSearch = (data) => {
  const replaceComma = data.replace(',', '.');

  data = replaceComma;

  return data;
};
