module.exports = {
  arrayCellComparer : (n1, n2) => {
    return n1.reduce((acc, e, i) => {
      return acc && e.currentState===n2[i].currentState;
    }, true);
  },
  matrixCellComparer : (m1, m2) => {
    return m1.reduce((acc1, e1, x) => {
      return acc1 && e1.reduce((acc2, e2, y) => {
        return acc2 && e2.currentState===m2[x][y].currentState;
      }, true);
    }, true);
  }
};