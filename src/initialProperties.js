export default {
  version : 1.0,
  showTitles: true,
  qListObjectDef : {
    qShowAlternatives : true,
    qDef: {
      qSortCriterias : [
        {
          qSortByState: 0,
          qSortByLoadOrder: 0,
          qSortByFrequency: 0,
          qSortByNumeric: 0,
          qSortByAscii: 0,
          qSortByExpression: 0,
          qExpression: {
            qv: ""
          }
        }
      ]
     },

    qInitialDataFetch : [{
        qWidth : 1,
        qHeight : 50
    }],
  },

  selectionMode: "QUICK",
  selectionEnabled: true,

  renderAs: "button",
  alwaysOneSelected: false,
  lockSelection: false,
  itemsLayout: "v"
}