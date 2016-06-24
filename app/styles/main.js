import {
  active,
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
  padding: 5,
  outline: 'none',
  borderRadius: 20,
  border: `1px solid ${greyLight}`,
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
    top: -11,
    left: 20,
    width: 15,
    display: 'inline-block',
    svg: {
      fill: main,
    },
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
    fontSize: '2em',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
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
