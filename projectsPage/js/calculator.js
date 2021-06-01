const screen = document.getElementById('calculator-screen');
const keyOne = document.querySelector('.one');
const keyTwo = document.querySelector('.two');
const keyThree = document.querySelector('.three');
const keyFour = document.querySelector('.four');
const keyFive = document.querySelector('.five');
const keySix = document.querySelector('.six');
const keySeven = document.querySelector('.seven');
const keyEight = document.querySelector('.eight');
const keyNine = document.querySelector('.nine');
const keyZero = document.querySelector('.zero');
const keyPoint = document.querySelector('.point');
const keyPlus = document.querySelector('.plus');
const keyMinus = document.querySelector('.minus');
const keyDivide = document.querySelector('.divide');
const keyTimes = document.querySelector('.times');
const keyResult = document.querySelector('.result');
// This function takes the innerHTML to display on screen
const getData = function(data) {
    data.addEventListener('click', function() {
        screen.innerHTML += data.innerHTML;
    });
};

if(keyOne) {
    keyOne.addEventListener('click', getData(keyOne), false);
}
if(keyTwo) {
    keyTwo.addEventListener('click', getData(keyTwo), false);
}
if(keyThree) {
    keyThree.addEventListener('click', getData(keyThree), false);
}
if(keyFour) {
    keyFour.addEventListener('click', getData(keyFour), false);
}
if(keyFive) {
    keyFive.addEventListener('click', getData(keyFive), false);
}
if(keySix) {
    keySix.addEventListener('click', getData(keySix), false);
}
if(keySeven) {
    keySeven.addEventListener('click', getData(keySeven), false);
}
if(keyEight) {
    keyEight.addEventListener('click', getData(keyEight), false);
}
if(keyNine) {
    keyNine.addEventListener('click', getData(keyNine), false);
}
if(keyZero) {
    keyZero.addEventListener('click', getData(keyZero), false);
}
if(keyPoint) {
    keyPoint.addEventListener('click', getData(keyPoint), false);
}
if(keyPlus) {
    keyPlus.addEventListener('click', getData(keyPlus),false);
}
if(keyMinus) {
    keyMinus.addEventListener('click', getData(keyMinus),false);
}
if(keyDivide) {
    keyDivide.addEventListener('click', getData(keyDivide),false);
}
if(keyTimes) {
    keyTimes.addEventListener('click', getData(keyTimes),false);
}
