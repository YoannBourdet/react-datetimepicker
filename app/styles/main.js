import { green, grey } from './colors';

export const component = {
  width: '350px',
  border: `1px solid ${grey}`,
};

/* Header */
export const header = {
  main: {
    position: 'relative',
    width: '100%',
    height: '200px',
    backgroundColor: `${green}`,
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
  backgroundColor: 'red',
});
