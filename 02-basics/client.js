'use strict';

Ext.define('MyApp.Client', {
  
  firstname: 'firstname not defined!',
  lastname: 'lastname not defined !',

  constructor: function(config){
    Ext.apply(this, config || {});
    console.log('I am the new client');
  }
});