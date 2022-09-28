let scoreHome = 0;
let scoreAway = 0;

scoreBoardHome = document.getElementById("scoreBoardHome")

// console.log(scoreBoardHome)

scoreBoardAway = document.getElementById("scoreBoardAway")

// console.log(scoreBoardAway)


function plusOne() {
    scoreHome += 1
    scoreBoardHome.textContent = scoreHome;


}

function plusTwo() {
    scoreHome += 2
    scoreBoardHome.textContent = scoreHome;


}

function plusThree() {
    scoreHome += 3
    scoreBoardHome.textContent = scoreHome;


}


function plusOneAway() {
    scoreAway += 1
    scoreBoardAway.textContent = scoreAway;


}


function plusTwoAway() {
    scoreAway += 2
    scoreBoardAway.textContent = scoreAway;


}
function plusThreeAway() {
    scoreAway += 3
    scoreBoardAway.textContent = scoreAway;


}

function resetZero() {
    scoreHome = 0;
    scoreAway = 0;
    scoreBoardHome.textContent = scoreHome;
    scoreBoardAway.textContent = scoreAway;



}





