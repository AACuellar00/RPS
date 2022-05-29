
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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
      console.log(button.id);
      playRound(button.id,computerPlay());
  });
});

if(scorePlayer<5 && scoreComp<5){

}
else if(scorePlayer==5 && scoreComp<5){

}

else{
    
}

function game(){
    let scorePlayer=0;
    let scoreComp=0;

    while(scorePlayer<5 && scoreComp<5){

        playerSelection = prompt("Please enter Rock, Paper, or Scissor");
        computerSelection = computerPlay();

        result =playRound(playerSelection, computerSelection);

        switch(result){
            case -1:
                console.log(`${playerSelection} is not a valid input`);
                break;
            case 0:
                console.log(`${playerSelection} ties with ${computerSelection}`);
                break;
            case 1:
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                scoreComp++;
                break;
            case 2:
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                scorePlayer++;
                break;
        }

    }
}
