// import { Card } from "./Card";

// the banner
const banner = document.querySelector('.banner');
//the game wrapper
const wrapper = document.querySelector('.wrapper');
// The Setup of page
const selectLevel = document.querySelector('.select-level');
const gameLevel = document.querySelector('#game-level');
const amountPlayers = document.querySelector('#amount-of-players');
const playBtn = document.querySelector('.play-btn');
const playerArr = [];
const playerPointArr =[];

const playerTurn = document.querySelector('.player-turn');

//The events for pressing play 
if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (gameLevel.value === "") {
            alert('Select Amount of Pieces');
            return;
        }
        selectLevel.remove(selectLevel);
        const card = new Card(wrapper, gameLevel.value);
        for(let i = 1; i <= amountPlayers.value;i++){
            const player = new Player(`Player${i}`, 0);
            playerArr.push(player.name);
            playerPointArr.push(player.points);
        };       
        shuffleCards();
    });
}
let levelComplete = 0;
let turns = 0;

function rdn(max){
    return Math.floor(Math.random() * max + 1);
}

// This part that handles the flipping and 
// the rules if card match for locking the board
//  and reFlip the card back!

let isFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){ 
    if(lockBoard) return;
    if(this === firstCard)return;
    this.classList.add('flip');

    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    isMatch();

    if(levelComplete === parseInt(gameLevel.value)){ 
        setTimeout(() => {
            alert(`
            Congratulations...
            You did it in ${turns} attems`);
        }, 500);
    }
}

function isMatch(){
    if(firstCard.dataset.spider === secondCard.dataset.spider){
        levelComplete+= 2;
        turns++;
        disableCards();
        return;
    }
    turns++;
    reFlipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function reFlipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 2000);
}

function resetBoard(){
    [isFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null,null];
}

function shuffleCards(){
    const cards =document.querySelectorAll('.card');
    cards.forEach(card => card.style.order = rdn(gameLevel.value +1));
}
