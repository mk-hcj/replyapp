let numc = document.getElementById("numberC");
let incrementNum = 0;
document.getElementById("buttonA").onclick = function increaser() {
    incrementNum = incrementNum + 1;
    numc.innerHTML= incrementNum;
}

let titleM = document.getElementById("title");
function submit() {
    titleM = titleM.value;
    let yourNAme = document.getElementById("yourName").value;
    let ourAnswer = document.getElementById("answer");
    ourAnswer.innerHTML = "hello! " + titleM +". " + yourNAme;
}


























/*let numc = document.getElementById("numberC");

let um = 0;
document.getElementById("buttonA").onclick = function counten() {
    um = um+1;
    numc.innerHTML = um;
}

function submit() {
    let yourName = document.getElementById("yourName").value;
    let talk = document.getElementById("answer");
    talk.innerHTML= "Nice to meet you, " + yourName;
}








document.getElementById("submit").onclick = function() {
    let yourName = document.getElementById("yourName").value;
    let talk = document.getElementById("answer");
    talk.innerHTML= "Nice to meet you, " + yourName;
}


function submitName() {
    yourName = yourName.innerHTML;
    myReply.innerText = yourName;
}*/
