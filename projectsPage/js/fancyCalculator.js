function addOnDisplay(display,character) {
    if(display.value === null || display.value === "0" ) {
        display.value = character;
    } else {
        display.value += character;
    }
}

function clearDisplay(display) {
    display.value = '0';
}

function showResult(display) {
    display.value = eval(display.value);
}

function square(display) {
    display.value = eval(display.value) * eval(display.value);
}

function squareRoot(display) {
    display.value = Math.sqrt(display.value);
}

function deleteNum(display) {
    display.value = display.value.substring(0,display.value.length -1);
}

const addOn = document.querySelectorAll('.btnAdd');
if(addOn)
{
    for(let i =0; i < addOn.length; i++) {
   
        addOn[i].addEventListener('click', function() {    
            if(document.querySelector("#display").value === null || document.querySelector("#display").value === "0") {
                document.querySelector("#display").value = addOn[i].value;
            }else {
                document.querySelector("#display").value += addOn[i].value;
            }
        });
    }
}

//   //               1     2         3     4       5
const rekenSom = [5,    "+"     , 5, "+", 5  ,  "*",    5, "+" ,9, "/",2,"²","+","√",9];
while(rekenSom.indexOf("²") > -1) {
    let i = rekenSom.indexOf("²");
    let a = rekenSom[i-1] * rekenSom[i-1];
    rekenSom[i-1] = a;
    rekenSom.splice(i,1);
}

while(rekenSom.indexOf("√") > -1) {
    let i = rekenSom.indexOf("√");
    let a = Math.sqrt(rekenSom[i + 1]);
    rekenSom[i] = a;
    rekenSom.splice(i+1,1);
}


while(rekenSom.indexOf("*") > -1){
    let i = rekenSom.indexOf("*");
    let a = rekenSom[i-1] * rekenSom [i+1];
    rekenSom[i-1] = a;
    rekenSom.splice(i,2);
    // rekenSom.push(a);
    // [5,+,25]
}

while(rekenSom.indexOf("/") > -1){
    let i = rekenSom.indexOf("/");
    let a = rekenSom[i-1] / rekenSom [i+1];
    rekenSom[i-1] = a;
    rekenSom.splice(i,2);
    // rekenSom.push(a);
    // [5,+,25]
}

while(rekenSom.indexOf("+") > -1){
    let i = rekenSom.indexOf("+");
    let a = rekenSom[i-1] + rekenSom [i+1];
    rekenSom[i-1] = a;
    rekenSom.splice(i,2);
    // [5,+,25]
}


while(rekenSom.indexOf("-") > -1){
    let i = rekenSom.indexOf("-");
    let a = rekenSom[i-1] - rekenSom [i+1];
    rekenSom[i-1] = a;
    rekenSom.splice(i,2);
    // rekenSom.push(a);
    // [5,+,25]
}
console.log(rekenSom);