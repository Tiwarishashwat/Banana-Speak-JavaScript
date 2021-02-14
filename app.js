// var username=prompt("Give me a username");
// var message="This script works "+username+"!";
// alert(message)
// var btnTranslate = document.getElementById(btn-translate);
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var wordLength = document.querySelector("#twitterConcept");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function numberOfWords(text)
{
 wordLength.innerText="You have written "+txtInput.length+" characters,"+" you have "+(280-textInput.length)+" characters left!"
}

wordLength.addEventListener("keypress",numberOfWords)

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
//funtranslation