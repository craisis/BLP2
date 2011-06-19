Ext.define('BLP2.LogbookManager', {
  singleton: true,
  requires: [
    'BLP2.ContestManager',
    'Ext.data.Store',
    'BLP2.SocketManager',
    'Ext.JSON',
    'Ext.StoreManager'
  ],
  constructor: function(){
    this.logbookStores = {};
    this.logbookData = {};
    this.currentLogbookId = null;
  },
  
  getLogbookStore: function(logbookRecord, callback){
    var me = this;
    if(this.logbookStores.hasOwnProperty(logbookRecord.data.title)){
      me.currentLogbookId = logbookRecord.data.title;
      callback(this.logbookStores[logbookRecord.data.title]);
      return;
    }
    BLP2.ContestManager.getContactModel(logbookRecord.data.contestId, function(contestModel){
      me.currentLogbookId = logbookRecord.data.title;
      me.logbookData[logbookRecord.data.title] = {data: [] };
      me.logbookStores[logbookRecord.data.title] = new Ext.data.Store({
          autoLoad: true,
          model: contestModel,
          data: me.logbookData[logbookRecord.data.title],
          proxy: {
              type: 'memory',
              reader: {
                  type: 'json',
                  root: 'data'
              }
          }
      });
      callback(me.logbookStores[logbookRecord.data.title]);
    });
    
  },
  addTransaction: function(formData){
    var payload = {};
    payload.logbookId = this.currentLogbookId;
    payload.body = {};
    // Generate rest of transaction here
    payload.body.data = {};
    payload.body.data.contact = formData;
    var peopleStore = Ext.StoreManager.lookup('People');
    var operator = peopleStore.getById(formData.operatorId);
    var logger = peopleStore.getById(formData.loggerId);
    payload.body.data.people = {};
    payload.body.data.people.operator = {
      'name': operator.get('firstName') +' '+operator.get('lastName'),
      'call-sign': operator.get('callSign')
    };
      payload.body.data.people.logger = {
        'name': logger.get('firstName') +' '+logger.get('lastName'),
        'call-sign': logger.get('callSign')
      };

    var id = Sha1.hash(Ext.JSON.encode(payload.body));
    payload.body.ID = id;
    payload.body['root-ID'] = id;
    payload.body['origin-ID'] = window.localStorage.getItem('originId');
    payload.body.timestamp = (new Date).getTime();
    BLP2.SocketManager.connect().send(payload);
  }
  
});
