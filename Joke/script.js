const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
  fetch(url)
    .then(data => data.json())
    .then(item => {
      if (item.type === "single") {
        jokeContainer.textContent = `${item.joke}`;
      } else if (item.type === "twopart") {
        jokeContainer.textContent = `${item.setup} ${item.delivery}`;
      } else {
        jokeContainer.textContent = "Oops, no joke found!";
      }
    })
    .catch(error => {
      jokeContainer.textContent = "Oops, something went wrong!";
      console.error(error);
    });
}

btn.addEventListener("click", getJoke);

getJoke();
document.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      getJoke();
    }
  });

