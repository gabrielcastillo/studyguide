Ext.define('MyApp.Client', {
  firstname: 'John',
  lastname: 'Doe',

  constructor: function(config){
    Ext.apply(this, config || {});

    console.log('I am the new client');
  }

});

var client = Ext.create("MyApp.Client");

console.log(client.name);

var client2 = Ext.create("MyApp.Client",{
  firstname: 'Susan',
  lastname: 'Doe',
});

console.log(client2.name);