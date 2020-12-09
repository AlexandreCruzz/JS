let els = document.querySelector("ul");
console.log(els)

document.body.onload = permutNumber();

function permutNumber(){
    let tag = document.getElementsByTagName("li");
    let myArray = [3, 1, 2];

    for (let i = 0; i < myArray.length; i++){
        tag.item(i).querySelector('span').innerHTML = myArray[i];
    }
}


