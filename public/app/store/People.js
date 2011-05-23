Ext.define('BLP2.store.People', {
  extend: 'Ext.data.Store',
  requires: ['BLP2.model.Person'],

  model: 'BLP2.model.Person',
  
  data: [
    {firstName: 'David', lastName: 'Stearns', callSign: 'KC0DDR'},
    {firstName: 'Hargobind', lastName: 'Khalsa', callSign: 'AB0YL'},
    {firstName: 'John', lastName: 'Doe'}
  ]
});
