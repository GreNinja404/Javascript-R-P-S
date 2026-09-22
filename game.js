
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

//Logic for user choices
const getHumanChoice = (choices) =>{
    let choice = prompt("Choose 1: 'Rock', 'Paper', 'Scissor': ");
    if(choice == 'Rock'){
        console.log("Rock");
    }else if(choice == 'Paper'){
        console.log("Paper");
    }else if(choice == 'Scissor'){
        console.log("Scissor");
    }else{
        alert("Invalid choice: RETRY");
    }
}

//let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();