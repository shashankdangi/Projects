const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click",()=>{
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`).then((response) => response.json()).then((data)=>{
        if (data.length === 0){
            result.innerHTML = `<h2>Word Can't be find</h2>`;
        }else{
            result.innerHTML = `
                <div class="info">
                    <div class="word">
                        <h2>${inpWord}</h2>
                        <p><i>${data[0].meanings[0].partOfSpeech} /${data[0].phonetic}/</i></p>
                    </div>
                    <div class="sound">
                        
                        <button onclick ="play()" id="sound-btn"><i class="fa fa-volume-up" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="def">
                    <h3>${data[0].meanings[0].definitions[0].definition}</h3>
                    <p><i>${data[0].meanings[0].definitions[0].example || ""}</i></p>
                </div>`;   
                sound.setAttribute("src", `${data[0].phonetics[0].audio}`); 
        }
    }).catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
  });
});


function play() {
    sound.play();
}
  
const inputField = document.getElementById("inp-word");
const searchButton = document.getElementById("search-btn");
  
  // Select the input field when the "\" key is pressed
document.addEventListener("keypress", function (event) 
{
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