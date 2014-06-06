//データベース名
var DB_NAME = 'db_sample';
//オブジェクトストア名
var STORE_NAME = 'store_person';

  function DbHelper() {
  	  this.name = 'App_DbHelper';
  }
  
  DbHelper.prototype.getInstance = function( ) {
    var db=null;
  	  
	//open
	var rq = indexedDB.open(DB_NAME);
	rq.onupgradeneeded =  function(result) {
console.log('#onupgradeneeded');
		db = this.result;
		 
		var store = db.createObjectStore(STORE_NAME, {
		    keyPath: 'id',        // key= id
		    autoIncrement: false,
		});
		store.createIndex('byName', 'name');
		db.close();
	};
  };

  DbHelper.prototype.get_allItems = function(view) 
  {
		var rqOpen = indexedDB.open(DB_NAME);
		rqOpen.onsuccess = function(e) {
			var db= e.target.result;
			var tx = db.transaction(STORE_NAME, 'readonly' );
			var store = tx.objectStore(STORE_NAME);
			var rq = store.openCursor();
			rq.onsuccess = function(e) {
		    	cursor = rq.result;
			    if(cursor) {
			    	var item= new Item();
					var data = cursor.value;
					
					item.id       =data.id;
					item.name     = data.name;
					item.nameKana=data.nameKana;
				    view.disp_line(item);
					cursor.continue();
			    }
			    db.close();
			};
		}  
  };
  
  DbHelper.prototype.proc_addItem = function(item ,view) 
    {
		var rq = indexedDB.open(DB_NAME);
		rq.onsuccess = function(e) {
 console.log('#onsuccess_open');
			var db= e.target.result;
		  	var tx = db.transaction(STORE_NAME, 'readwrite');
			tx.oncomplete = function() { };
		       
		    var store = tx.objectStore(STORE_NAME);
		    var request =store.put({
		        id      : parseInt(item.id ),
		        name    : item.name,
		        nameKana: item.kana
		    });
		    request.onsuccess = function(e) {
 console.log('#onsuccess_add');
		    	db.close();
		    	proc_addComplete(view);
		    }
		}
  };
  
  DbHelper.prototype.deleteDb = function( ) {
	indexedDB.deleteDatabase(DB_NAME);
  };
  
   DbHelper.prototype.tstfunc = function( ) {
  	  console.log('tst_func');
  };
  
//
//function
//
function dbDestroy(db)
{
	db.close();
}

function proc_addComplete(view)
{
	var db= new DbHelper();
	db.get_allItems(view);
}

