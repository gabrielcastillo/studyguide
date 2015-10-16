'use strict';

Ext.define('MyApp.skating.Jump', {
  waltz: function(){
    console.log('Waltz: One and half jump that form the basis for a axel jump');
  },

  axel: function(){
    console.log('Axel: A single axel actually has 1.5 rotations!');
  },

  split: function(){
    console.log('Split: With either a flip, lutz, or loop entry and split or straddle position in the air.');
  },

  combination : function(){
    console.log("This is a combination jump!");
  }

});

Ext.define('MyApp.skating.Spin', {

  scratch: function(){
    console.log('Scratch: With the free leg crossed in front of the skating leg.");');
  },

  crossfoot: function(){
    console.log('Crossfoot: Is a back upright spin in which the free leg is crossed...');
  },

  camel: function(){
    console.log('Camel: Is a spin in which the free leg is held backwards with the knee higher than the hip level');
  },

  combination : function(){
    console.log("This is a combination spin!!");
  }

});

Ext.define('MyApp.skating.Footwook', {
  mohawk: function(){
    console.log('Mohawk: This sequence is usually done in the counterclockwise direction and on a circle or curve');
  },

  spreadeagle: function(){
    console.log('Spreadeagle: Spread eagle: The skater glides on both feet');
  },

  twizzles: function(){
    console.log('Twizzles: Twizzles: multirotational one-foot turns done in figure skating.');
  }

});

Ext.define('MyApp.single.Skater', {

  extend : 'Ext.util.Observable',

  mixins : {
    jump : 'MyApp.skating.Jump',
    spin : 'MyApp.skating.Spin',
    footwork : 'MyApp.skating.Footwook'
  },

  constructor : function(options){
    Ext.apply(this, options);
  },

  complete : function(){
    var me = this;
    console.log(me.name +" from "+me.nationality+" starts the program good luck!");

    me.waltz();
    me.mohawk();
    me.camel();
    me.axel();
    me.spreadeagle();
    me.scratch();
    console.log(me.name + " ends  the program and gets first place!");
  }

});


Ext.define('MyApp.dancing.Skater', {
  extent: 'Ext.util.Observable',
  mixins: {
    spin : 'MyApp.skating.Spin',
    footwork : 'MyApp.skating.Footwook'
  },

  constructor : function(options){
    Ext.apply(this, options);
  },

  complete : function(){
    var me = this;
    
    console.log(me.name+" from "+me.nationality+" starts the program! Let's see how it goes...");
    me.camel();
    me.scratch();
    me.spreadeagle();
    me.twizzles();
    me.camel();
    console.log(me.name+" ends the program but with no good results");

  }
});






