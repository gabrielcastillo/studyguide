'use strict';

Ext.define('MyApp.data.Invoice', {
  config: {
    client: '',
    tax: 0.083,
    subtotal: 0,
    total: 0,
  },

  constructor: function(config){
    var me = this;

    me.initConfig(config);
  },

  applySubtotal : function(value){
    var me = this;
    me.setTotal(value + value * me.getTax());
    return value;
  }

});


Ext.define('MyApp.data.Client', {
  statics: {
    sequence: 0,
    nextId : function(){
      return ++this.sequence;
    }
  },

  constructor: function(){
    this.id = this.self.nextId();

    console.log(this.id);
  }


});