import {
  active,
  grey,
  main,
  white,
} from './colors';

/* Date Time Picker */
export const dtm = {
  display: 'inline-block',
};

/* Input */

export const input = {
  padding: '5px',
  outline: 'none',
  borderRadius: '20px',
  border: `1px solid ${grey}`,
};

/* Calendar */
export const calendar = {
  width: '350px',
  color: white,
  backgroundColor: main,
};

/* Header */
export const header = {
  main: {
    position: 'relative',
    width: '100%',
    height: '200px',
  },
  btn : {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    border: '1px solid #000',
    width: '50px',
    height: '50px',
    fontSize: '2em',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
};

/* Table */
export const tableCell = {
  display: 'table-cell',
  textAlign: 'center',
  width: '50px',
  height: '50px',
  verticalAlign: 'middle',
};

export const tableCellBtn = Object.assign({}, tableCell, {
  border: 'none',
  cursor: 'pointer',
});

export const tableCellBtnActive = Object.assign({}, tableCellBtn, {
  backgroundColor: active,
});
