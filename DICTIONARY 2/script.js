const result = document.getElementById("result");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.getElementById("sound");

document.getElementById("search-btn").addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        result.innerHTML = `<h1>Can't find the word</h1>`;
      } else {
        result.innerHTML = `
        <div class="word">
        <h1>${inpWord}</h1>
        <button onclick="play()" id=""><i class="fa fa-volume-up" aria-hidden="true"></i></button>
        </div>
        <div class="info">
        <p><i> ${data[0].meanings[0].partOfSpeech} /${data[0].phonetic}/ </i></p>
        </div>
        <div class="def">
        <h3>${data[0].meanings[0].definitions[0].definition}</h3>
        <p id="def"><i>${data[0].meanings[0].definitions[0].example || ""}</i></p>
        </div>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
      }
    })
    .catch(() => {
      result.innerHTML = `<h1>Can't find the word</h1>`;
    });
});

function play() {
  sound.play();
}

const inputField = document.getElementById("inp-word");
const searchButton = document.getElementById("search-btn");

// Select the input field when the "\" key is pressed
document.addEventListener("keypress", function (event) {
  if (event.key === "\\") {
    inputField.value = "";
    inputField.focus();
  }
});

// Trigger the search button's click event when Enter key is pressed
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
