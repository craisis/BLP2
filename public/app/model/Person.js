Ext.define('BLP2.model.Person', {
  extend: 'Ext.data.Model',

  fields: [{name: 'id', type: 'int'},{name: 'firstName', type: 'string'},{name: 'lastName', type: 'string'},{name: 'callSign', type: 'string'}]
});
