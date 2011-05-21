Ext.define('BLP2.model.Contact'){
  extend: 'Ext.data.Model',
  belongsTo: [
    {type: 'belongsTo', associationKey: 'operator', foreignKey: 'operatorId', ownerModel: 'Person'},
    {type: 'belongsTo', associationKey: 'logger', foreignKey: 'loggerId', ownerModel: 'Person'}],
  fields: [
    {name: 'id', type: 'string'},
    {name: 'operatorId', type: 'int'},
    {name: 'loggerId', type: 'int'},
    {name: 'band', type: 'string'},
    {name: 'mode', type: 'string'},
    {name: 'frequency', type: 'float'},
    {name: 'time', type: 'date'}
  ],
  statics: {
    factory: function(contestJSON){
      
    }
  }
}