//データベース、サンプル

onload = function() {
	//init
	init_proc();
	
	document.querySelector('#id-a-delete').onclick = function() {
		var db= new DbHelper();
		db.deleteDb();
	}
	document.querySelector('a#id-a-add').onclick = function() {
		get_addParam();
	}
	document.querySelector('a#id-a-show').onclick = function() {
		var db= new DbHelper();
		var view = new View();
		    view.disp_init();
		db.get_allItems(view);
	}
}


//
// function
//
function get_addParam(){
 	var sId   = $('input#id-text-id' ).val();
 	var sName = $('input#id-text-name').val();
 	var sKana = $('input#id-text-kana').val();
console.log(sId + sName);

	var item= new Item();
	item.id= parseInt( sId );
	item.name= sName;
	item.kana= sKana;

    var db= new DbHelper();
    var view = new View();
        view.disp_init();
	db.proc_addItem(item  ,view );
	
	$('input#id-text-id'   ).val('');
	$('input#id-text-name' ).val('');
	$('input#id-text-kana' ).val('');
}

function init_proc()
{
	if (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB) {
		console.log('OK: use indexedDB');
	}else{
		console.log('NG: use indexedDB');
	}
	var db= new DbHelper();
	db.getInstance();

}

