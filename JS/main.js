var auther = document.getElementById("auther");
var quote = document.getElementById("quote");

var words = [
  {
    auther: "Socrates",
    quotes: "“The only true wisdom is in knowing you know nothing.”",
  },
  {
    auther: "Albert Einstein",
    quotes:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    auther: "Marcus Tullius Cicero",
    quotes: "“A room without books is like a body without a soul.”",
  },
  {
    auther: "J.K. Rowling",
    quotes: "“It does not do to dwell on dreams and forget to live.”",
  },
  {
    auther: "Oscar Wilde",
    quotes: "“Always forgive your enemies; nothing annoys them so much.”",
  },
  {
    auther: "Thomas A. Edison",
    quotes: "“I have not failed. I've just found 10,000 ways that won't work.”",
  },
  {
    auther: "Dr. Seuss",
    quotes:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
  {
    auther: "Mae West",
    quotes: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    auther: "Mahatma Gandhi",
    quotes: "“Be the change that you wish to see in the world.”",
  },
  {
    auther: "Mark Twain",
    quotes: "“If you tell the truth, you don't have to remember anything.”",
  },
  {
    auther: "Frank Zappa",
    quotes: "“So many books, so little time.”",
  },
  {
    auther: "Nicolas Chamfort",
    quotes: "“A day without laughter is a day wasted.”",
  },
];

var currunt = " ";
function random() {
  var raand = Math.floor(Math.random() * 12); // or raand = Math.floor(Math.random() * words.length()) to make it dinamic
  while (currunt == raand) {
    raand = Math.floor(Math.random() * 12); // or raand = Math.floor(Math.random() * words.length()) to make it dinamic
  }
  currunt = raand;
  auther.innerHTML = "Auther : " + words[currunt].auther;
  quote.innerHTML = words[currunt].quotes;
}
