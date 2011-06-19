Ext.define('BLP2.controller.ContactEntry', {
  extend: 'Ext.app.Controller',
  requires: ['BLP2.LogbookManager'],
  

  init: function(){
    var me = this;
    this.control({
      'contact-entry #log-button': {
        click: this.addContact
      }
    });
  },
  addContact: function(event){
    var values = Ext.ComponentQuery.query('contact-entry')[0].form.getValues();
    BLP2.LogbookManager.addTransaction(values); // This will later call the Transaction manager that will call the correct store
    event.up('form').clear(); // This should really only reset the exchange fields and should only run if the previous add was successful
  },
  setLogbookStore: function(logbookStore){
    this.logbookStore = logbookStore;
  }
});
