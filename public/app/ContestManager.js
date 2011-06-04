Ext.define('BLP2.ContestManager', {
  singleton: true,
  requires: [
    'BLP2.Contest',
    'BLP2.view.ContactEntry',
    'Ext.Ajax',
    'Ext.JSON',
    'BLP2.model.Contact'
  ],
  constructor: function(){
    this.contests = {};
    this.contestModels = {};
  },
  
  fetchContest: function(contestId,callback){
    var me = this;
    if(this.contests.hasOwnProperty(contestId)){
      callback(this.contests[contestId]);
      return;
    }
    // AJAX call to get contest
    Ext.Ajax.request({
      url: 'contests/'+contestId,
      success: function(response){
        me.contests[contestId] = Ext.JSON.decode(response.responseText);
        callback(me.contests[contestId]);
        // process server response here
      }
    });
  },
  
  getContactEntry: function(contestId, callback){
    this.fetchContest(contestId,function(contestJSON){
      var panel = Ext.create('BLP2.view.ContactEntry');
      panel.init(contestJSON);
      callback(panel);
    });
  },
  
  getContactModel: function(contestId, callback){
    var me = this;
    if(this.contestModels.hasOwnProperty(contestId)){
      callback(this.contestModels[contestId]);
      return;
    }
    this.fetchContest(contestId,function(contestJSON){
      me.contestModels[contestId] = BLP2.model.Contact(contestJSON);
      callback(me.contestModels[contestId]);
      
    });
  }
  
});
