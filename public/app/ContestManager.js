Ext.define('BLP2.ContestManager', {
  singleton: true,
  requires: [
    'BLP2.Contest',
    'BLP2.view.ContactEntry',
    'Ext.Ajax',
    'Ext.JSON'
  ],
  constructor: function(){
    this.contests = {};
  },
  
  getContactEntry: function(contestId, callback){
    var me = this;
    var panel = Ext.create('BLP2.view.ContactEntry');
    var createPanel = function(contestJSON,callback){
      panel.init(contestJSON);
      callback(panel);
      return;
    };
    if(this.contests.hasOwnProperty(contestId)){
      createPanel(this.contests[contestId],callback);
      return;
    }
    // AJAX call to get contest
    Ext.Ajax.request({
        url: 'contests/'+contestId,
        success: function(response){
            me.contests[contestId] = Ext.JSON.decode(response.responseText);
            createPanel(me.contests[contestId],callback);
            // process server response here
        }
    });
    
  }
  
});
