
function computerPlay(){

    let compRanCho = Math.floor(Math.random()*3);

    switch(compRanCho){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function playRound(playerSelection,computerSelection){
    let result;

    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        result = 0;
    }

    else if(playerSelection.toUpperCase() === "ROCK"){
        if(computerSelection === "Paper")
            result = 1;
        else
            result = 2;
    }

    else if(playerSelection.toUpperCase() === "PAPER"){
        if(computerSelection === "Scissor")
            result = 1;
        else
            result = 2;
    }

    else if(playerSelection.toUpperCase() === "SCISSOR"){
        if(computerSelection === "Rock")
            result = 1;
        else
            result = 2;
    }

    else
        result = -1;

    return result;
}


let scorePlayer=0;
let scoreComp=0;
let roundRes=0;

const buttons = document.querySelectorAll('button');
const resultH = document.querySelector('#Result');

const playerW = document.querySelector('#playC')
const computerW = document.querySelector('#compC');

const pPlayerW = document.createElement('p');
const pComputerW = document.createElement('p');
const resultPrint= document.createElement('p');

playerW.appendChild(pPlayerW);
computerW.appendChild(pComputerW);
resultH.appendChild(resultPrint);

pPlayerW.textContent='0';
pComputerW.textContent='0';

resultPrint.textContent="First to 5 wins. Click one of the choices below to begin.";


function winCheck(scoreP,scoreC){
    if(scoreP<5 && scoreC<5){
        return 0;
    }
    else if(scorePlayer==5){
        resultPrint.textContent="Good job, you won! ";
        resultPrint.style.color="purple";
        return 1;
    }
    else{
        resultPrint.textContent="Too bad, you lost. ";
        resultPrint.style.color="purple";
        return 1;
    }
}

buttons.forEach((button) => {

  button.addEventListener('click', () => {
      console.log(button.id);

      roundRes=playRound(button.id,computerPlay());

      switch(roundRes){
          case 0:
              resultPrint.textContent="Tie.";
              break;
          case 1:
              scoreComp++;
              pComputerW.textContent=`${scoreComp}`;
              resultPrint.textContent="You lose this round.";
              winCheck(scorePlayer,scoreComp);
              break;
          case 2:
              scorePlayer++;
              pPlayerW.textContent=`${scorePlayer}`;
              resultPrint.textContent="You won this round.";
              winCheck(scorePlayer,scoreComp);
              break;
          default:
              break;
      }
      

  });
});


