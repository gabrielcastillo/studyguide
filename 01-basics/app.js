Ext.onReady(function(){
  Ext.Msg.confirm('Confirm', 'Do you like EXTJS?', function(btn){
    if( btn === 'yes' ){
      Ext.Msg.alert('Gread!', 'This is great!');
    }else{
      Ext.Msg.alert("Really?", 'That\'s too bad');
    }
  });
})