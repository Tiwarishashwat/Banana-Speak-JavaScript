// var username=prompt("Give me a username");
// var message="This script works "+username+"!";
// alert(message)
// var btnTranslate = document.getElementById(btn-translate);
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
function clickEventHandler()
{
    console.log("clicked!");
    console.log("input",txtInput.value);
}
btnTranslate.addEventListener("click",clickEventHandler);
console.log(btnTranslate);