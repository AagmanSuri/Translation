var clickMeBtn = document.querySelector("#btn");
var inputarea = document.querySelector("#inputid");
var outputdiv = document.querySelector("#upload");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

const getTranslatedUrl = (text) => {
  return url + "?text=" + text;
};
const errorHandel = () => {
  alert("Server Not Woring");
};
const clickHandeler = () => {
  var inputText = inputarea.value;
  fetch(getTranslatedUrl(inputText))
    .then((response) => response.json())
    .then((data) => {
      outputdiv.innerHTML = data.contents.translated;
    })
    .catch(errorHandel);
};

clickMeBtn.addEventListener("click", clickHandeler);
