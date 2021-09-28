// Associate an event to the button
var search = document.getElementById( "search" );
search.addEventListener( "click", searchCode );

// XML file location
var xmlFilename = "book_store.xml";

function searchCode() {
  var codeSearch = document.getElementById( "code" ).value;

  var result = document.getElementById( "result" );
  result.innerHTML = "";

  getXMLDocObject( xmlFilename, function ( xmlDoc ) {

    // extract the info from the xmlDoc object
    var bookstore = xmlDoc.getElementsByTagName( "bookstore" )[ 0 ];
    var books = bookstore.getElementsByTagName( "book" );
    var found = false;
    var i;

    for ( i = 0; i < books.length; i += 1 ) {
      var code = books[ i ].attributes[ 0 ].value;

      if ( codeSearch === code ) {
        var pCode = document.createElement( "p" );
        pCode.innerHTML = "code: " + codeSearch;
        result.appendChild( pCode );

        var pAuthor = document.createElement( "p" );
        pAuthor.innerHTML = books[ i ].children[ 0 ].nodeName + ": " + books[ i ].children[ 0 ].innerHTML;
        result.appendChild( pAuthor );

        var pTitle = document.createElement( "p" );
        pTitle.innerHTML = books[ i ].children[ 1 ].nodeName + ": " + books[ i ].children[ 1 ].innerHTML;
        result.appendChild( pTitle );

        found = true;
      }
    }

    if ( !found ) {
      alert( "Book is not registered" );
    }
  } );
}

// Get file content and parse it to Document Object Model
function getXMLDocObject( xmlFile, callback ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if ( ( this.readyState === 4 ) && ( this.status === 200 ) ) {
      var xmlContent = this.responseText;
      var xmlDoc = parseXML( xmlContent );
      callback( xmlDoc );
    }
  };
  xhttp.open( 'GET', xmlFile, true );
  xhttp.send();
}

// Parse a text string into an XML DOM object
function parseXML( xmlContent ) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString( xmlContent, 'text/xml' );
  return xmlDoc;
}
