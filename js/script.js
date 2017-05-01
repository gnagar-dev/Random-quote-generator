//Variable to keep track of quotes already displayed to user
var displayedQuotes = [];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//To show the quote to user for first time.
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
//If quote is already displayed then pick another quote until all quotes are displayed to user
function getRandomQuote() {
    var quote = '';
    
    while(true) {
       
       //Get a random number
       var randomNumber = getRandomNumber(quotes.length);

        //If no quotes are displaed to uses then add this to displayed quotes and return quote to caller
        if(displayedQuotes.length === 0){
            displayedQuotes.push(randomNumber);
            quote = quotes[randomNumber];            
            break;
        }
        //If all quotes are displayed to user then reset the displayedQuotes array and return current quote to caller
        else if(displayedQuotes.length == quotes.length) {
            displayedQuotes = [];
            displayedQuotes.push(randomNumber);
            quote = quotes[randomNumber];
            break;
        }
        //If the current quote is not already displayed to used then add this to dislayed quotes and return quote to caller
        else if(displayedQuotes.indexOf(randomNumber) === -1) {
            displayedQuotes.push(randomNumber);
            quote = quotes[randomNumber];
            break;
        }
    }

    //Log the quote on console and return quote to caller
    console.log('The random quote is: ' + JSON.stringify(quote));
    return quote;
}

//This function set a random background and display current quote to user 
function printQuote() {
    html = '';
    //set random background color for the document
    document.body.style.backgroundColor = 'rgb('+ getRandomNumber(255) +',' + getRandomNumber(255) + ','+ getRandomNumber(255) + ')';
    
    //Get randon quote
    var randomlySelectedQuote =  getRandomQuote();
    
    //Construct the string containing HTML markup for quote
    html += '<p class="quote">' + randomlySelectedQuote.quote + '</p>';
    html += '<p class="source">' + randomlySelectedQuote.source;

    //Only add citation if present
    if(randomlySelectedQuote.citation) {
        html += '<span class="citation">' + randomlySelectedQuote.citation + '</span>';
    }
    //Only add year if present
    if(randomlySelectedQuote.year) {
        html += '<span class="year">' + randomlySelectedQuote.year + '</span>';
    }
    //Only add tags if present
    if(randomlySelectedQuote.tags) {
        html += '<span class="tags">' + randomlySelectedQuote.tags + '</span>';
    }
    html += '</p>';

    //Set inner HTML for div with id 'quote-box' with constructed HTML markup
    document.getElementById('quote-box').innerHTML = html;
}

