let dimensions = {
  type : "items",
  translation : "Common.Dimension",
  ref : "qListObjectDef",
  min: 1,
  max: 1,
  allowAdd : true,
  allowRemove : true,
  items: {
    cId : {
      ref : "qListObjectDef.qDef.cId",
      type : "string",
      show : false
    },
    libraryId : {
      type : "string",
      component : "library-item",
      libraryItemType : "dimension",
      ref : "qListObjectDef.qLibraryId",
      label : "Dimension",
      show : function(data) {
        return data.qListObjectDef && data.qListObjectDef.qLibraryId;
      }
    },
    label : {
      type : "string",
      ref : "qListObjectDef.qDef.qFieldLabels.0",
      label : "Label",
      translation : "Common.Label",
      show : true
    },
    field : {
      type : "string",
      component : "expression",
      expression : "always",
      expressionType : "dimension",
      ref : "qListObjectDef.qDef.qFieldDefs.0",
      //label : "Field",
      translation : "Common.Field",
      show : function (a) {
        return !a.qListObjectDef.qLibraryId
      },
      change : function (a) {
        var b = a.qListObjectDef.qDef;
        b.qFieldLabels || (b.qFieldLabels = []),
        b.qFieldLabels[0] = b.qFieldDefs[0]
      }
    },
    clearDimension : {
      type : "boolean",
      component : "buttongroup",
      ref: "clearDimension",
      options : [{
          value : null,
          translation : "Common.Delete"
        }
      ],
      show : function (a) {
        return a.qListObjectDef.qLibraryId || a.qListObjectDef.qDef.qFieldDefs[0];
      },
      change: function(a){
        delete a.qListObjectDef.qLibraryId;
        a.qListObjectDef.qDef.qFieldDefs[0] = "";
        a.qListObjectDef.qDef.qFieldLabels[0] = "";
        a.clearDimension = false;
      }
    }
  }
};

let settings = {
  type: "items",
  uses: "settings",
  items: {
    additionalOptions: {
      type: "items",
      label: "Options",
      translation: "properties.presentation",
      items: {
        render : {
          type : "string",
          component : "dropdown",
          label : "Render as",
          ref : "renderAs",
          options : [{
            value : "button",
            label : "Buttons"
          },
          {
            value : "radiobutton",
            label : "Radio buttons"
          },
          {
            value : "checkbox",
            label : "Checkboxes"
          },
          {
            value : "sensecheckbox",
            label : "Sense check boxes"
          },
          {
            value : "senseswitch",
            label : "Sense switch"
          },
          {
            value : "senseradiobutton",
            label : "Sense radio buttons"
          },
          {
            value : "select",
            label : "Select"
          },
          // {
          //   value : "multiselect",
          //   label : "Multi select"
          // }
          ],
          defaultValue : "button"
        },
        alwaysOneSelectedValue:{
          type: "boolean",
          label: "Always one selected value",
          ref: "alwaysOneSelected",
          defaultValue: false,
          show: function(data){
            return data.renderAs !== 'select';
          }
        },
        lockSelection: {
          type: "boolean",
          label: "Lock selection",
          ref: "lockSelection",
          defaultValue: false
        },
        itemsLayout : {
          ref : "itemsLayout",
          type : "string",
          translation : "properties.orientation",
          component : "item-selection-list",
          defaultValue : "v",
          horizontal : true,
          items : [{
              icon : "º",
              component : "icon-item",
              labelPlacement : "bottom",
              translation : "properties.orientation.vertical",
              value : "v"
            }, {
              icon : "Ω",
              component : "icon-item",
              labelPlacement : "bottom",
              translation : "Common.Horizontal",
              value : "h"
            }
          ],
          show: function(data){
            return !(data.renderAs === 'select' || data.renderAs === 'multiselect');
          }
        },
        /*
        itemsLayout: {
          type: "string",
          label: "Layout",
          ref: "itemsLayout",
          component: "radiobuttons",
          defaultValue: "v",
          options: [{
            value: "v",
            label: "Vertical"
          }, {
            value: "h",
            label: "Horizontal"
          }],
          show: function(data){
            return !(data.renderAs === 'select' || data.renderAs === 'multiselect');
          }
        },
        */
        selectionColor : {
          ref : "selectionColor",
          translation : "Selection color",
          type : "integer",
          component : "color-picker",
          defaultValue : 6
        }
      }
    }
  }
};

let sorting = {
  uses: "sorting"
};

export default {
  type: "items",
  component: "accordion",
  items: {
    dimensions,
    sorting,
    settings
  }
};

/*
export default  {
  type: "items",
  component: "accordion",
  items: {
    dimensions : {
      type : "items",
      translation : "Common.Dimension",
      ref : "qListObjectDef",
      min: 1,
      max: 1,
      allowAdd : true,
      allowRemove : true,
      items: {
        cId : {
          ref : "qListObjectDef.qDef.cId",
          type : "string",
          show : false
        },
        label : {
          type : "string",
          ref : "qListObjectDef.qDef.qFieldLabels.0",
          //label : "Label",
          translation : "Common.Label",
          show : true
        },
        field : {
          type : "string",
          component : "expression",
          expression : "always",
          expressionType : "dimension",
          ref : "qListObjectDef.qDef.qFieldDefs.0",
          //label : "Field",
          translation : "Common.Field",
          show : function (a) {
            return !a.qListObjectDef.qLibraryId
          },
          change : function (a) {
            var b = a.qListObjectDef.qDef;
            b.qFieldLabels || (b.qFieldLabels = []),
            b.qFieldLabels[0] = b.qFieldDefs[0]
          }
        },
        clearDimension : {
          type : "boolean",
          component : "buttongroup",
          ref: "clearDimension",
          options : [{
              value : null,
              translation : "Common.Delete"
            }
          ],
          show : function (a) {
            return a.qListObjectDef.qLibraryId || a.qListObjectDef.qDef.qFieldDefs[0];
          },
          change: function(a){
            delete a.qListObjectDef.qLibraryId;
            a.qListObjectDef.qDef.qFieldDefs[0] = "";
            a.qListObjectDef.qDef.qFieldLabels[0] = "";
            a.clearDimension = false;
          }
        }
      } // items
    },  // dimension
    sorting: {
      //label: "Sorting",
      translation : "properties.sorting",
      type : "items",
      ref : "qListObjectDef",
      items: {
        qSortByLoadOrder:{
          type: "numeric",
          component : "dropdown",
          label : "Sort by Load Order",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qSortByLoadOrder",
          options : [{
            value : 1,
            label : "Ascending"
          }, {
            value : 0,
            label : "No"
          }, {
            value : -1,
            label : "Descending"
          }],
          defaultValue : 0,

        },
        qSortByState:{
          type: "numeric",
          component : "dropdown",
          label : "Sort by State",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qSortByState",
          options : [{
            value : 1,
            label : "Ascending"
          }, {
            value : 0,
            label : "No"
          }, {
            value : -1,
            label : "Descending"
          }],
          defaultValue : 0,

        },
        qSortByFrequency:{
          type: "numeric",
          component : "dropdown",
          //label : "Sort by Frequence",
          translation : "properties.sorting.sortByFrequency",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qSortByFrequency",
          options : [{
            value : -1,
            label : "Ascending"
          }, {
            value : 0,
            label : "No"
          }, {
            value : 1,
            label : "Descending"
          }],
          defaultValue : 0,

        },
        qSortByNumeric:{
          type: "numeric",
          component : "dropdown",
          //label : "Sort by Numeric",
          translation : "properties.sorting.sortByNumeric",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qSortByNumeric",
          options : [{
            value : 1,
            label : "Ascending"
          }, {
            value : 0,
            label : "No"
          }, {
            value : -1,
            label : "Descending"
          }],
          defaultValue : 0,

        },
        qSortByAscii:{
          type: "numeric",
          component : "dropdown",
          //label : "Sort by Alphabetical",
          translation : "properties.sorting.sortByAlphabetic",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qSortByAscii",
          options : [{
            value : 1,
            label : "Ascending"
          }, {
            value : 0,
            label : "No"
          }, {
            value : -1,
            label : "Descending"
          }],
          defaultValue : 0,
        },
        qSortByExpression:{
          type: "numeric",
          component : "dropdown",
          //label : "Sort by Expression",
          translation : "properties.sorting.sortByExpression",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qSortByExpression",
          options : [{
            value : 1,
            label : "Ascending"
          }, {
            value : 0,
            label : "No"
          }, {
            value : -1,
            label : "Descending"
          }],
          defaultValue : 0,
        },
        qExpression: {
          type : "string",
          expression : "always",
          expressionType : "expression",
          ref : "qListObjectDef.qDef.qSortCriterias.0.qExpression.qv",
          //label : "Sort Expression",
          translation : "Common.Expression",
          show : function(data) {
            return data.qListObjectDef
            && data.qListObjectDef.qDef
            && data.qListObjectDef.qDef.qSortCriterias.length > 0
            && data.qListObjectDef.qDef.qSortCriterias[0].qSortByExpression
            && data.qListObjectDef.qDef.qSortCriterias[0].qSortByExpression !== 0;
          }
        }
      }
    },
    options: {
        //uses: "settings",
        label: "Options",
        items: {
            render : {
              type : "string",
              component : "dropdown",
              label : "Render as",
              ref : "renderAs",
              options : [{
                value : "button",
                label : "Buttons"
              },
              {
                value : "radiobutton",
                label : "Radio buttons"
              },
              {
                value : "checkbox",
                label : "Checkboxes"
              },
              {
                value : "sensecheckbox",
                label : "Sense check boxes"
              },
              {
                value : "senseswitch",
                label : "Sense switch"
              },
              {
                value : "senseradiobutton",
                label : "Sense radio buttons"
              },
              {
                value : "select",
                label : "Select"
              },
              // {
              //   value : "multiselect",
              //   label : "Multi select"
              // }
              ],
              defaultValue : "button"
            },
            alwaysOneSelectedValue:{
              type: "boolean",
              label: "Always one selected value",
              ref: "alwaysOneSelected",
              defaultValue: false,
              show: function(data){
                return data.renderAs !== 'select';
              }
            },
            lockSelection: {
              type: "boolean",
              label: "Lock selection",
              ref: "lockSelection",
              defaultValue: false
            },
            itemsLayout : {
              ref : "itemsLayout",
              type : "string",
              translation : "properties.orientation",
              component : "item-selection-list",
              defaultValue : "v",
              horizontal : true,
              items : [{
                  icon : "º",
                  component : "icon-item",
                  labelPlacement : "bottom",
                  translation : "properties.orientation.vertical",
                  value : "v"
                }, {
                  icon : "Ω",
                  component : "icon-item",
                  labelPlacement : "bottom",
                  translation : "Common.Horizontal",
                  value : "h"
                }
              ],
              show: function(data){
                return !(data.renderAs === 'select' || data.renderAs === 'multiselect');
              }
            },

            selectionColor : {
              ref : "selectionColor",
              translation : "Selection color",
              type : "integer",
              component : "color-picker",
              defaultValue : 6
            }
        }
    },
    settings: {
      uses: "settings"
    }
  } // items
};
*/