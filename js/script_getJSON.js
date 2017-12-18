
var url ="https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520";
var quotes;
$.getJSON(url, function(result){
	quotes = result;
	myFunction(quotes);
});

window.setInterval(function(){
	myFunction(quotes);
},5000, quotes);

function myFunction(arr) {
	var quoteIndex = Math.floor(Math.random()*(arr.length));
	var quote = arr[quoteIndex];
	document.getElementById('quote').innerHTML = quote.quote;
	document.getElementById('author').innerHTML = quote.name;
}
