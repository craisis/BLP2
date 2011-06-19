Ext.Loader.setConfig({
  enabled: true,
  paths: {'Ext': '/extjs/src'}
});

Ext.application({
  name: 'BLP2',
  autoCreateViewport: true,
  controllers: ['LogbookBrowser', 'People', 'ContactEntry'],
  requires: ['BLP2.SocketManager'],
  launch: function(){
    var socket = BLP2.SocketManager.connect();
    if(window.localStorage.getItem('originId') == undefined){
      var oID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      });
      window.localStorage.setItem('originId', oID);
    }
    BLP2.SocketManager.register('debug', {
      echo: function(data){ console.log(data); },
      alert: function(data){ alert(data.body); }
    });
  }
});
