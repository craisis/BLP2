Ext.define('BLP2.store.Logbooks', {
  extend: 'Ext.data.Store',
  requires: ['BLP2.model.Logbook'],

  model: 'BLP2.model.Logbook',

  proxy: {
    type: 'ajax',
    url: '/logbooks.json',
    reader: {
      type: 'json',
      root: 'logbooks'
    },
    autoLoad: true
  }
}, function(){
  //new BLP2.store.Logbooks({storeId: 'Logbooks'});
});
