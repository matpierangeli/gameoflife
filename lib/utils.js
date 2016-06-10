module.exports = {
  matrixCellComparer : (n1, n2) => {
    return n1.reduce((acc, e, i) => {
      return acc && e.currentState===n2[i].currentState;
    }, true);
  }
};