let apiQuotes = [];

// Get new Quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}
// Get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const respose = await fetch(apiUrl);
        apiQuotes = await respose.json();
        // console.log(apiQuotes[37]);
        newQuote();
    } catch (error) {

    }
}


// On load
getQuotes();