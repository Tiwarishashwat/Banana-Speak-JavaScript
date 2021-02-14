//Global Variables for input
var btnTranslate = document.getElementById("btn-translate");
var txtInput = document.getElementById("txt-input");
var outputDiv = document.getElementById("output");
var wordLength = document.getElementById("twitterConcept");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//Listening to events : Characters Left Function
txtInput.addEventListener("keyup", function(){
    var counter=txtInput.value.length;
    var output = "You have written " + counter + " characters, and " + " you have " + (280 - counter) + " characters left!";
    if(counter>280)
    {
        var st=txtInput.value.slice(0,280);
        txtInput.innerText=st;
    }
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
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(clickEventHandler);
}
//Listening to events : Translate Button Click
btnTranslate.addEventListener("click", clickEventHandler);