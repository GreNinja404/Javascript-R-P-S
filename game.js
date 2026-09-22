let humanScore = 0;
let computerScore = 0;
//let computer choose between 1 to 3 randomly
const getComputerChoice = () => {
    let random = Math.floor(Math.random() *3) + 1;
    
    if(random === 1){
        return "Rock"
    }else if(random === 2){
        return "Paper"
    }else if(random === 3){
        return "Scissor"
    };
}

//let players choose between rock, paper, and scissor
const getHumanChoice = () =>{
    let choice = prompt("choose between Rock, Paper, Scissor");
    if(choice === null || choice.trim() === ""){
        alert("Error, try again");
    }
    let fixedChoice = choice.charAt(0).toUpperCase() + choice.toLowerCase().slice(1);
    return fixedChoice;
}



const playRound = (humanChoice, computerChoice) => {

    if(computerChoice === humanChoice){
        console.log("It's a tie");
        return;
    }
    
    if((humanChoice === "Rock" && computerChoice === "Scissor")){
        humanScore++;
        console.log(`Player won! ${humanChoice} beats ${computerChoice}`)
    }else if(humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;                                                       // logic for human choices
        console.log(`Player won! ${humanChoice} beats ${computerChoice}`)
    }else if(humanChoice === "Scissor" && computerChoice === "Paper"){
        humanScore++;
        console.log(`Player won! ${humanChoice} beats ${computerChoice}`)
    }


    if((computerChoice === "Rock" && humanChoice === "Scissor")){
        computerScore++;
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}`)
       
    }else if(computerChoice === "Paper" && humanChoice === "Rock"){         //logic for computer choices
        computerScore++;
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}`)
    }else if(computerChoice === "Scissor" && humanChoice === "Paper"){
        computerScore++;
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}`)
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Score: Player: ${humanScore} || Computer: ${computerScore}`)