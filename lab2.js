var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice >= 0 && computerChoice <= 0.33){
    computerChoice = "rock";
    console.log(computerChoice);
    console.log(userChoice);
    
}
else if (computerChoice >= 0.34 && computerChoice <= 0.66){
    computerChoice = "paper";
    console.log(computerChoice);
    console.log(userChoice);
}
else{
    computerChoice = "scissors";
    console.log(computerChoice);
    console.log(userChoice);
}