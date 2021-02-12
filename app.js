// var username=prompt("Give me a username");
// var message="This script works "+username+"!";
// alert(message)
// var btnTranslate = document.getElementById(btn-translate);
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something is wrong with the server, try again later");
}

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerText = "Translated: " + json.contents.translated)
        .catch(clickEventHandler);

}
btnTranslate.addEventListener("click", clickEventHandler);
console.log(btnTranslate);