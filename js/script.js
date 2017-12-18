
var xmlhttp = new XMLHttpRequest();
var url ="https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520";
var quotes, intervalId;
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		quotes = JSON.parse(this.responseText);
		autoShow(quotes);
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();


document.getElementById("nxt").onclick = function() {
	clearInterval(intervalId);
	showQuote(quotes);
	intervalId = false;
}

document.getElementById("conti").onclick = function() {
	if (!intervalId) {
		autoShow(quotes);
	}
}

function autoShow(quotes) {
	intervalId = setInterval(function() {
		showQuote(quotes);
	}, 2000);
}

function showQuote(arr) {
	var quoteIndex = Math.floor(Math.random()*(arr.length));
	var quote = arr[quoteIndex];
	document.getElementById('quote').innerHTML = quote.quote;
	document.getElementById('author').innerHTML = "- " + quote.name;
}