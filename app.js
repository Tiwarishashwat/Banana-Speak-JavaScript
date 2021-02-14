//Global Variables for input
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var wordLength = document.querySelector("#twitterConcept");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//Displaying number of characters in realtime
function numberOfWords() {
    wordLength.innerText = "You have written " + txtInput.value.length + " characters," + " you have " + (280 - textInput.length) + " characters left!"
}

//Listening to events : Characters Left Function
txtInput.addEventListener("keypress", numberOfWords);

//Error Handling
function errorHandler(error) {
    console.log("error occured", error);
    alert("Something is wrong with the server, try again later");
}

//Fetch from server : API call
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

//Triggering Functions
function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerText = "Translated: " + json.contents.translated)
        .catch(clickEventHandler);
}
//Listening to events : Translate Button Click
btnTranslate.addEventListener("click", clickEventHandler);
//console.log(btnTranslate);