const textAreaInput = document.querySelector("#textarea-input");
const divOutput = document.querySelector("#div-output");
const btnTranslate = document.querySelector("#btn-translate");
const url = "https://api.funtranslations.com/translate/minion.json?text=";

let translate = (text) => {
  let api = url + text;
  let promise = fetch(api);
  promise
    .then((response) => response.json())
    .then((json) => (divOutput.innerText = json.contents.translated))
    .catch((er) => {
      divOutput.innerText = "Sorry some problem occurred in server!";
      console.error("Error was : " + er);
    });
};

btnTranslate.addEventListener("click", () => {
  let text = textAreaInput.value.trim();
  if (text !== "") translate(text);
  else divOutput.innerText = "Sorry! input field is empty.";
});
