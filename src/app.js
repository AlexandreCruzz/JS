let elInput = document.querySelector('.phrase');
let nbInput = document.querySelector('.submitPhrase');
// une fonction de callback que l'on passera à addEventListener
function eventInput(event){
    let value = event.target.value;
    nbchar = value.length
    element = document.getElementsByClassName("result");
    element[0].innerHTML = nbchar;
    return value;
}
function nbWord(){
    debugger;
    var value = elInput.value;
    if (value.trim() === ""){
        alert("La chaîne est vide")
    } else {
        var str = value.trim().split(" ");
        var nbWord = str.length;

        element = document.getElementsByClassName("numberWord");
        element[0].innerHTML = "Nombre de mots: " + nbWord
    }
}

// On écoute les changement des inputs
elInput.addEventListener('input', eventInput);
nbInput.addEventListener('click', nbWord);