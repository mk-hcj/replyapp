let numc = document.getElementById("numberC");

let um = 0;
document.getElementById("buttonA").onclick = function counten() {
    um = um+1;
    numc.innerHTML = um;
}

//name answer
function submit() {
    let yourName = document.getElementById("yourName").value;
    let talk = document.getElementById("answer");
    talk.innerHTML= "Nice to meet you, " + yourName;
}








/*document.getElementById("submit").onclick = function() {
    let yourName = document.getElementById("yourName").value;
    let talk = document.getElementById("answer");
    talk.innerHTML= "Nice to meet you, " + yourName;
}


function submitName() {
    yourName = yourName.innerHTML;
    myReply.innerText = yourName;
}*/
