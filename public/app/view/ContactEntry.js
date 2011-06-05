Ext.define('BLP2.view.ContactEntry', {
  extend: 'Ext.form.Panel',
  requires: [
    'Ext.form.FieldSet',
    'Ext.form.FieldContainer',
    'Ext.form.field.Text',
    'Ext.layout.container.Anchor',
    'Ext.layout.container.HBox',
    'Ext.form.field.ComboBox'
  ],
  
  alias: 'widget.contact-entry',
  layout: 'anchor',
  autoScroll: true,
  border: false,
  defaults: {
    xtype: 'fieldset',
    margin: 6,
    padding: 6,
    anchor: '100%',
    layout: 'anchor',
    defaults: {
      anchor: '100%'
    }
  },
  buttons: [{
    text: 'Clear',
    handler: function(){
      this.up('form').getForm().reset();
    }
  }, {
    text: 'Log',
    itemId: 'log-button'
  }],
  items: [{
    title: 'Exchange'
  }, {
    title: 'People',
    items: [{
      xtype: 'combo',
      name: 'operatorId',
      fieldLabel: 'Operator',
      store: 'People',
      queryMode: 'local',
      displayField: 'displayName',
      valueField: 'id'
    }, {
      xtype: 'combo',
      name: 'loggerId',
      fieldLabel: 'Logger',
      store: 'People',
      queryMode: 'local',
      displayField: 'displayName',
      valueField: 'id'
    }]
  }, {
    title: 'Other',
    items: [{
      xtype: 'fieldcontainer',
      fieldLabel: 'Band/Mode',
      layout: 'hbox',
      defaults: {
        xtype: 'textfield',
        hideLabel: true,
        flex: 1
      },
      items: [{
        name: 'band',
        fieldLabel: 'Band',
      }, {
        xtype: 'splitter',
        flex: 0
      }, {
        name: 'mode',
        fieldlabel: 'Mode',
      }]
    }, {
      xtype: 'textfield',
      name: 'frequency',
      fieldLabel: 'Frequency'
    }, {
      xtype: 'textfield',
      name: 'time',
      fieldLabel: 'Time'
    }]
  }],

  init: function(contestDef){
    var exchangeFields = this.down('fieldset');
    Ext.each(contestDef['exchangeFields'], function(field, index){
      var widget = Ext.widget(field['type'], {
        name: field['label'],
        fieldLabel: field['label'],
        listeners: {
          specialkey: function(field, e){
            if(e.getKey() == e.TAB){
              var next;
              if(e.shiftKey){
                var last = field.up().query('field');
                next = field.previousSibling() || last[last.length - 1];
              } else {
                next = field.nextSibling() || field.up().down('field');
              }
              next.focus();
              e.stopEvent();
            }
          }
        }
      });
      exchangeFields.add(widget);
    });
  }
});

