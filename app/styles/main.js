import {
  active,
  black,
  grey,
  greyLight,
  main,
  white,
} from './colors';

/* Date Time Picker */
export const dtm = {
  display: 'inline-block',
};

/* Input */
export const input = {
  outline: 'none',
  borderRadius: 30,
  border: `1px solid ${greyLight}`,
  padding: 15,
  minWidth: 200,
  color: black,
};

/* Calendar */
export const calendar = {
  container: {
    position: 'relative',
    width: 350,
    color: white,
    backgroundColor: main,
    padding: '40px 20px 20px 20px',
    marginTop: 15,
  },
  arrow: {
    position: 'absolute',
    top: -10,
    left: 20,
    width: 20,
    display: 'inline-block',
    fill: main,
  },
};

/* Header */
export const header = {
  container: {
    position: 'relative',
    width: '100%',
    height: 50,
    textAlign: 'center',
  },
  paragraph: {
    display: 'inline-block',
  },
  btn: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    width: 50,
    height: 50,
    fontSize: '1.6em',
    lineHeight: '50px',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  arrow: {
    display: 'inline-block',
    fill: white,
    width: 20,
    height: 20,
  },
};

export const weekdays = {
  container: {
    display: 'table',
    width: '100%',
    height: 'auto',
  },
  cell: {
    display: 'table-cell',
    textAlign: 'center',
    width: 5,
    height: 50,
    verticalAlign: 'middle',
    color: grey,
  },
};

/* Table */
export const monthdays = {
  table: {
    display: 'table',
    width: '100%',
    height: 'auto',
  },
  row: {
    display: 'table-row',
  },
};

export const tableCell = {
  display: 'table-cell',
  textAlign: 'center',
  width: 50,
  height: 50,
  verticalAlign: 'middle',
};

export const tableCellBtn = Object.assign({}, tableCell, {
  border: 'none',
  cursor: 'pointer',
});

export const tableCellBtnActive = Object.assign({}, tableCellBtn, {
  backgroundColor: active,
});
