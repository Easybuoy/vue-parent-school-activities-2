import { FILTER_ORDER } from '../constants';
const FILTER_NAME = 'order';

export default [
  {
    id: FILTER_ORDER.ASC,
    name: FILTER_NAME,
    value: FILTER_ORDER.ASC,
    text: 'Ascending'
  },
  {
    id: FILTER_ORDER.DESC,
    name: FILTER_NAME,
    value: FILTER_ORDER.DESC,
    text: 'Descending'
  },
];
