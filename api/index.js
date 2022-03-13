const quote = document.getElementById("quote");
const pic = document.getElementById("pic");

const getQuote = () => {
  //Récupérer une citation aléatoire
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });
};

const getPic = () => {
  //Récupérer une image aléatoire
  fetch("https://picsum.photos/1600/1000").then((res) => {
    console.log(res.url);
    pic.innerHTML = `<img src=${res.url} />`;
  });
};

quote.addEventListener("click", () => {
  getQuote();
  getPic();
});
getQuote();
getPic();
