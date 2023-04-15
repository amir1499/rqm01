const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const quotes = [
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
    author: "John Maxwell"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  const quote = getRandomQuote();
  quoteText.innerText = quote.text;
  quoteAuthor.innerText = `- ${quote.author}`;
}

updateQuote();

newQuoteBtn.addEventListener("click", updateQuote);