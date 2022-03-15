let news = [];

fetch("./test-news.json")
  .then((response) => (news = response.json()))
  .then(console.log(news));

console.log(news);
