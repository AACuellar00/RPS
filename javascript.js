
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

function game(){
    let playerSelection;
    let computerSelection;
    let result;
    let scoreTie=0;
    let scorePlayer=0;
    let scoreComp=0;

        console.log("Let's play Rock, Paper, Scissor");

    for(let i =0;i<5;i++){

        playerSelection = prompt("Please enter Rock, Paper, or Scissor");
        computerSelection = computerPlay();

        result =playRound(playerSelection, computerSelection);

        switch(result){
            case -1:
                console.log(`${playerSelection} is not a valid input`);
                break;
            case 0:
                console.log(`${playerSelection} ties with ${computerSelection}`);
                scoreTie++;
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
    console.log(`Overall result is ${scoreTie} tie(s), ${scorePlayer} player win(s), and ${scoreComp} computer win(s).`);
}


game();