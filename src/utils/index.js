import { FILTER_ORDER } from '../constants';

export const sortPrices = (array, field, order = FILTER_ORDER.ASC) => {
  if (order === FILTER_ORDER.ASC) {
    const sortedArray = array.sort(
      (a, b) => parseFloat(a[field]) - parseFloat(b[field])
    );
    return sortedArray;
  } else if (order === FILTER_ORDER.DESC) {
    const sortedArray = array.sort(
      (a, b) => parseFloat(b[field]) - parseFloat(a[field])
    );
    return sortedArray;
  } else {
    return array;
  }
};

export const sortFields = (array, field, order) => {
  if (order === FILTER_ORDER.ASC) {
    const sortedArray = array.sort((a, b) => {
      const FIELDA = a[field].toUpperCase();
      const FIELDB = b[field].toUpperCase();
      if (FIELDA < FIELDB) {
        return -1;
      }
      if (FIELDA > FIELDB) {
        return 1;
      }
      return 0;
    });
    return sortedArray;
  } else if (order === FILTER_ORDER.DESC) {
    const sortedArray = array.sort((a, b) => {
      const FIELDA = a[field].toUpperCase();
      const FIELDB = b[field].toUpperCase();
      if (FIELDB < FIELDA) {
        return -1;
      }
      if (FIELDB > FIELDA) {
        return 1;
      }
      return 0;
    });
    return sortedArray;
  } else {
    return array;
  }
};

export const sortAvailability = (array, field, order) => {
  if (order === FILTER_ORDER.ASC) {
    const sortedArray = array.sort((a, b) => (a[field] === b[field] ? 0 : a[field] ? -1 : 1));
    return sortedArray;
  } else if (order === FILTER_ORDER.DESC) {
    const sortedArray = array.sort((a, b) => (a[field] === b[field] ? 0 : a[field] ? 1 : -1));
    return sortedArray;
  } else {
    return array;
  }
};
