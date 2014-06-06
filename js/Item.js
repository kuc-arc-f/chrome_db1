//
// Item.js
var Item = function( ) {
	  this.id =   0;
	  this.name = '';
	  this.kana = '';
	  this.toString = function() {
	    window.alert(this.id + " ," + this.name+ ", "+ this.kana );
	  };
 }

