var http = require('http');

//function to check pallindrom number
function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var number = process.argv[2];

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var result = palindrome(number);
  if (result === true ) {
  	console.log(number + " is a palindrome number");
  	response.end(number + " is a palindrome number");
  } else {
  	console.log(number + " is not a palindrome number");
  	response.end(number + " is not a palindrome number");
  }
  
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);

console.log("Server running at http://127.0.0.1:8080/");