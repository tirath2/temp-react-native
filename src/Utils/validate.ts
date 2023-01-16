import i18next from 'i18next';

export const mobileValidation = (number: string): string => {
  if (!number) {
    return i18next.t('MANDATORY_ERROR');
  }
  let numTest: RegExp = /^[0-9]*$/;
  if (numTest.test(number) && number.length === 10) {
    return '';
  } else {
    return i18next.t('INVALID_NUMBER');
  }
};

export const mandatoryValidation = (text: string): string => {
  if (!text) {
    return i18next.t('MANDATORY_ERROR');
  }
  return '';
};
