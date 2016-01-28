// add scripts

$(document).on( 'ready', function() {
  console.log( 'READY PLAYER ONE?' );
  
  seedLocalStorage();
  
  addDataFromLocalStorageToDOM ();
  
  $( 'table' ).on( 'click', '#increment', function() {
    // get data from localstroage 
    // update the quantity
    // send data back to localstorage
    // update the DOM

    var button = this;
    var itemName = $(button).attr( 'data-name' );
    var newArray = [];
        
    var currentStateOfLocalStorage = JSON.parse( localStorage.getItem( 'items' ) );
    for (var i = 0; i < currentStateOfLocalStorage.length; i++) {
      if ( currentStateOfLocalStorage[i].name === itemName ) {
        currentStateOfLocalStorage[i].quantity++;
      }
      newArray.push( currentStateOfLocalStorage[i] );
    }
    localStorage.setItem( 'items', JSON.stringify(newArray) )
    addDataFromLocalStorageToDOM ();
  });
  
});

function addDataFromLocalStorageToDOM () {
  $( '#all-items' ).empty();
  var allItems = JSON.parse( localStorage.getItem( 'items' ) );
  allItems.forEach( function(obj) {
    $('#all-items').append('<tr><td>' + obj.name + '</td><td class="text-right">' + obj.amount + '</td><td class="text-right">' + obj.quantity + '</td><td class="text-center"><button id="increment" class="btn btn-sm btn-primary" data-name="' + obj.name + '">+</button></td></tr>')
  })
}



function seedLocalStorage() {
  var data = [
    {
      'name': 't-shirt',
      'amount': 20.89,
      'quantity': 0 
    },
    {
      'name': 'pants',
      'amount': 200.99,
      'quantity': 0 
    },
    {
      'name': 'hat',
      'amount': 10.50,
      'quantity': 0 
    },
  ];

  if (JSON.parse( localStorage.getItem( 'items' ) )) {
    localStorage.setItem( 'items', JSON.stringify(data) );
  }
}





