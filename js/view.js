//

  function View() {
  	  this.name = 'App_View';
  }
  
  View.prototype.disp_init = function() {
  		$('ul#id-ul-out').remove();
		var divOut= $('div#id-div-out');
		var ulObj= $('<ul id="id-ul-out"></ul>');
		    divOut.append( ulObj );
  };
  /*
  View.prototype.disp_items = function( items ) {
		var ulObj= $('ul#id-ul-out');
		for(var i=0; i <items.length ;i++){
			var item= items[i];
			var sLine='<li>' + item.id + ': '+  item.name + ': '+item.nameKana+ '</li>';
			ulObj.append( $(sLine) );
	console.log( sLine );
		}
  };
  */
  
    View.prototype.disp_line = function( item ) {
// console.log( items );
		var ulObj= $('ul#id-ul-out');
		var sLine='<li>' + item.id + ': '+  item.name + ': '+item.nameKana+ '</li>';
		ulObj.append( $(sLine) );
	console.log( sLine );
  };
  
   View.prototype.tstfunc = function( ) {
  	  console.log('tst_func');
  };
  
	
//
//function
//

 