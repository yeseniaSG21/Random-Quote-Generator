/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
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
    year: 1913
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
    year: 1868
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
    year: 1989
  }
];

/*
 This function will generate a random number between 0 and length of quotes array.
 It then will select randomQuote from our array and return the object
*/
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
