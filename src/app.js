var li = document.createElement("li"),
    myUl = document.getElementById("numbers");
debugger;

let num = 4
let myArray = ["D", "E", "F", "G", "H"];

for (let i = 0; i < myArray.length; i++){
    var li = document.createElement("li"),
        myUl = document.getElementById("numbers"),
        content = document.createTextNode(myArray[i] + " = " + num);

    li.appendChild(content);
    myUl.appendChild(li);
    num++;
}