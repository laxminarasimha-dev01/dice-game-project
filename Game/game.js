//player Sections
const player_1 = document.querySelector('.player_1');
const player_2 = document.querySelector('.player_2');
//rolling the dice
const rollBtn = document.querySelector('.btn--roll');
//players score elements
let player1Score = document.querySelector('#p1Score');
let player2Score = document.querySelector('#p2Score');
//targetscores
let player1Target = 25;
let p1Chance = 10;
let player2Target = 25;
let p2Chance = 10;
//player turn
let turn  = 'player1';
//gameover
let gameOver = false;
//players Text 
const player1Text = document.getElementById('p1Name');
const player2Text = document.getElementById('p2Name');
player1Text.classList.add('playerturn')

//Dice Img
const diceImg = document.querySelector('.dice');
//hiding the dice by default
diceImg.classList.add('.hidden');

//rollbtn Script
function rollingDice(){
    if(!gameOver && p1Chance != 0 || p2Chance !=0)
    {
        const num = genarateNumbre();
        diceImg.src = `dice-${num}.png`;
        playerTurn(num);
    }
}
//click event Listener
rollBtn.addEventListener('click', rollingDice);

//genarating Number 
function genarateNumbre(){
    return Math.trunc(Math.random()*6)+1;
}

function playerTurn(num){
    if(turn == 'player1'){
        // console.log(player1Score);
        player1Target -= num;
        if(player1Target >=0){
            player1Score.innerHTML = player1Target;
        }
        // console.log(player1Target);
        p1Chance -=1;
        player2Text.classList.add('playerturn');
        player1Text.classList.remove('playerturn');
    }
    if(turn == 'player2'){
        player2Target -= num;
        if(player2Target >=0){
            player2Score.innerHTML = player2Target;
        }
        p2Chance -=1;
        player2Text.classList.remove('playerturn');
        player1Text.classList.add('playerturn');
    }
    turn = turn==='player1'?'player2':'player1';
    // console.log(player1Score.innerHTML == 0)
    if(player1Score.innerHTML == 0||player2Score.innerHTML == 0){
        gameOver = true;
    }
}

function playAgain(){
    player1Score.innerHTML = 25;
    player2Score.innerHTML = 25;
    player1Target = 25; 
    player2Target = 25;
    gameOver = false;
    p1Chance = 10;
    p2Chance = 10;
}







// 'use strict';
// const player0El = document.querySelector('.player_1');
// const player1El = document.querySelector('.player_2');
// const score0El = document.querySelector('#p1Score');
// const score1El = document.querySelector('#p2Score');
// const current0El = document.getElementById('#p1CurrentScore');
// const current1El = document.getElementById('#p2CurrentScore');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
// let currentscore = 0;
// const scores = [0, 0];
// let activePlayer = 0;
// let playing = true;

// const switchPlayer = function () {
// currentscore = 0;
// document.getElementById(`current--${activePlayer}`).textContent =
// currentscore;
// activePlayer = activePlayer == 0 ? 1 : 0;
// player0El.classList.toggle('player--active');
// player1El.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
// if (playing) {
// diceEl.classList.remove('hidden');
// const dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// diceEl.src = `dice-${dice}.png`;
// if (dice !== 1) {
// currentscore += dice;
// document.getElementById(`current--${activePlayer}`).textContent =
// currentscore;
// } else {
// switchPlayer();
// }
// }
// });
// let active = 0;
// btnHold.addEventListener('click', function () {
// if (playing) {
// scores[activePlayer] += currentscore;
// document.getElementById(`score--${activePlayer}`).textContent =
// scores[activePlayer];
// if (scores[activePlayer] >= 20) {
// playing = false;
// diceEl.classList.add('hidden');
// document.getElementById(`score--${activePlayer}`).textContent = 'Win!🏆';
// switchPlayer();
// document.getElementById(`score--${activePlayer}`).textContent = 'Lost!👎';
// document
// .querySelector(`.player--${activePlayer}`)
// .classList.add('player--winner');
// active = activePlayer == 1 ? 0 : 1;
// document
// .querySelector(`.player--${active}`)
// .classList.add('player--active');
// } else {
// switchPlayer();
// }
// }
// });
// btnNew.addEventListener('click', function () {
// playing = true;
// document
// .querySelector(`.player--${activePlayer}`)
// .classList.remove('player--winner');
// activePlayer = 0;
// document.querySelector('.player--0').classList.add('player--active');
// document.querySelector('.player--1').classList.remove('player--active');
// scores[0] = 0;
// scores[1] = 0;
// document.getElementById('score--0').textContent = 0;
// document.getElementById('score--1').textContent = 0;
// });




