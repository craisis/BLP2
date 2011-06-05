Ext.define('BLP2.LogbookManager', {
  singleton: true,
  requires: [
    'BLP2.ContestManager',
    'Ext.data.Store'
  ],
  constructor: function(){
    this.logbookStores = {};
    this.logbookData = {};
  },
  
  getLogbookStore: function(logbookRecord, callback){
    var me = this;
    if(this.logbookStores.hasOwnProperty(logbookRecord.data.title)){
      callback(this.logbookStores[logbookRecord.data.title]);
      return;
    }
    BLP2.ContestManager.getContactModel(logbookRecord.data.contestId, function(contestModel){
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
    });
    
  }
  
});
