//const head = document.querySelector(".head").innerHTML

function myFunc() {
    let head = document.getElementById("head").innerHTML;
    document.getElementById("head").innerHTML = 
    head.replace("class","decagon");
}

