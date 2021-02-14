//Global Variables for input
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var wordLength = document.querySelector("#twitterConcept");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//Listening to events : Characters Left Function
txtInput.addEventListener("keyup", function(){
    var counter=txtInput.value.length;
    var output = "You have written " + counter + " characters, and " + " you have " + (280 - counter) + " characters left!";
    wordLength.innerText = output;
});

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