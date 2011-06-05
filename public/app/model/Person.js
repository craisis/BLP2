Ext.define('BLP2.model.Person', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'firstName', type: 'string'},
    {name: 'lastName', type: 'string'},
    {name: 'callSign', type: 'string'},
    {
      name: 'displayName',
      convert: function(value, record) {
        var display = record.get('firstName')
          , callSign = record.get('callSign');

        if(callSign) {
          display += ' (' + callSign + ')';
        } else {
          display += ' ' + record.get('lastName');
        }
        return display;
      }
    },
    {
      name: 'id',
      convert: function(value, record) {
        return record.get('callSign') || record.get('firstName') + ' ' + record.get('lastName');
      }
    }
  ]
});
