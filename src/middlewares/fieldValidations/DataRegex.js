// eslint-disable-next-line no-useless-escape
export const dateRegex = /d{0,9}\-\d{0,9}\-\d{0,9}/;
export const hourRegex = /(0?[0-9]|1[0-9]|2[0-3]):[0-9]+:(0?[0-9]|[1-5][0-9])/;
export const dateAndHourErrorMsg = 'Field(s) must be a date or hour string';
export const uuidCheck = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
