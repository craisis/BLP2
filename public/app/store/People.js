Ext.define('BLP2.store.People', {
  extend: 'Ext.data.Store',
  requires: ['BLP2.model.Person'],

  model: 'BLP2.model.Person',
  
  data: [
    {id: '1', firstName: 'David', lastName: 'Stearns', callSign: 'KC0DDR'},
    {id: '2', firstNAme: 'Hargobind', lastName: 'Khalsa', callSign: 'AB0YL'}
  ]

}, function(){
  //new BLP2.store.Logbooks({storeId: 'Logbooks'});
});
