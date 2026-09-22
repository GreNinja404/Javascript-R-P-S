
//Computer Logic Randomly Chooses between the 3 options
const getComputerChoice = (choices) =>{
    let choice = Math.floor(Math.random(choices) * 3) + 1;

    if(choice == 1){
        console.log("Rock");
    }else if(choice == 2){
        console.log("Paper");
    }else{
        console.log("Scissor");
    }
}

let computerChoice = getComputerChoice();