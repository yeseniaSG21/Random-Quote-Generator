/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

//Array stores my objects each consisting of 4 properties (quote, source, citation, year)
const quotes = [
  {
    quote: "That which does not kill us makes us stronger.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols",
    year: 1888
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: "speech",
    year: 1913,
    tag: "Historical"
  },
  {
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R. Tolkien",
    citation: "The Lord of the Rings: The Two Towers",
    year: 1954
  },
  {
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    citation: "Little Women",
    year: 1868,
    tag: "Inspirational"
  },
  {
    quote: "There is no greater agony than bearing an untold story inside you.",
    source: "Maya Angelou",
    citation: "I Know Why the Caged Bird Sings",
    year: 1969
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "John Keating",
    citation: "Dead Poets Society",
    year: 1989,
    tag: "Motivational"
  },
  {
    quote: "I can't go out tonight. I'm sick.",
    source: "Karen Smith",
    citation: "Mean Girls",
    year: 2004,
    tag: "Funny"
  }
];

/*
  This function will generate a random number between 0 and length of quotes array.
  It then will select random from our array and return the object
*/
function getRandomQuote() {
  let randomChose = quotes[Math.floor(Math.random() * quotes.length)];
  return randomChose;
};

/*
  This function will updates the background color to a random color.
  When a new quote prints to the page, the background color changes.
  Used https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript as reference
*/
function randomColorBackground() {
  let colors = [ "#DDA0DD", "#DAA520", "#F08080", "#98FB98", "#FFEBCD", "#87CEEB", "#A9A9A9", "#3CB371" ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/*
  This function will get a random quote object from the quotes array.
  Then assemble a string of HTML and quote properties; to update the HTML to include that string.
  It will check if properties are present before adding to the HTML string
*/
function printQuote() {
  document.body.style.backgroundColor = randomColorBackground();
  let randomQuote = getRandomQuote();
  let html = ' ';
  html +=
    `<p class="quote">${randomQuote.quote}</p>
    <p class="source"><strong>${randomQuote.source}</strong>`

  if ( randomQuote.citation ) {
    html += `<span class="citation"><em>${randomQuote.citation}</em></span>`;
  }
  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if ( randomQuote.tag ) {
    html += `<span class="tag">(${randomQuote.tag})</span>`;
  }
  html += `</p>`

  document.getElementById('quote-box').innerHTML = html;
};

//Rotate color and quote on an interval of 5 seconds; referenece: w3schools
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
