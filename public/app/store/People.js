Ext.define('BLP2.store.People', {
  extend: 'Ext.data.Store',
  requires: ['BLP2.model.Person'],

  model: 'BLP2.model.Person',
  
  data: [
    {firstName: 'David', lastName: 'Stearns', callSign: 'KC0DDR'},
    {firstNAme: 'Hargobind', lastName: 'Khalsa', callSign: 'AB0YL'}
  ]

}, function(){
  //new BLP2.store.Logbooks({storeId: 'Logbooks'});
});
