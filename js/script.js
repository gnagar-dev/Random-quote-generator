// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//To show the quote when user visit the page for first time.
printQuote();

//Setting interval to display quote after every 30 seconds
window.setInterval(printQuote, 30000);

//Creating variavle to hold HTML markup to create quote
var html = '';

//Generate and return random number for a given range
function getRandomNumber(range) {
   return Math.floor((Math.random() * range));
}

//Selects a random quote from quotes array and retun the quote back to caller
function getRandomQuote() {
    var randomNumber = getRandomNumber(quotes.length);
    return quotes[randomNumber];
}

//
function printQuote() {
    html = '';
    document.body.style.backgroundColor = 'rgb('+ getRandomNumber(255) +',' + getRandomNumber(255) + ','+ getRandomNumber(255) + ')';
    
    var randomlySelectedQuote =  getRandomQuote();
    
    html += '<p class="quote">' + randomlySelectedQuote.quote + '</p>';
    html += '<p class="source">' + randomlySelectedQuote.source;
    if(randomlySelectedQuote.citation !== undefined) {
        html += '<span class="citation">' + randomlySelectedQuote.citation + '</span>';
    }
    if(randomlySelectedQuote.year !== undefined) {
        html += '<span class="year">' + randomlySelectedQuote.year + '</span>';
    }
    if(randomlySelectedQuote.tags !== undefined) {
        html += '<span class="tags">' + randomlySelectedQuote.tags + '</span>';
    }
    html += '</p>';

    document.getElementById('quote-box').innerHTML = html;
}

