function computerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    };
};

function playRound(playerChoice, computerChoice){

    switch(true) {
        case ((playerChoice === 'rock') && (computerChoice === 'rock')):
            alert("You drew with the computer");
            break;
        case ((playerChoice === 'rock') && (computerChoice === 'paper')):
            alert("Computer wins, you are a loser");
            break;
        case ((playerChoice === 'rock') && (computerChoice === 'scissors')):
            alert("Computer wins, you are a loser");
            break;
        case ((playerChoice === 'paper') && (computerChoice === 'rock')):
            alert("Computer wins, you are a loser");
            break;
        case ((playerChoice === 'paper') && (computerChoice === 'paper')):
            alert("You drew with the computer");
            break;
        case ((playerChoice === 'paper') && (computerChoice === 'scissors')):
            alert("Computer wins, you are a loser");
            break;
        case ((playerChoice === 'scissors') && (computerChoice === 'rock')):
            alert("Computer wins, you are a loser");
            break;
        case ((playerChoice === 'scissors') && (computerChoice === 'paper')):
            alert("Computer wins, you are a loser");
            break;
        case ((playerChoice === 'scissors') && (computerChoice === 'scissors')):
            alert("You drew with the computer");
            break;
    };
};

document.getElementById('rock').onclick = function rock() {
    let player = "rock";
    alert("You chose " + player);

    let computer = computerChoice();
    alert("Computer chose " + computer);

    playRound(player, computer);
};

document.getElementById("paper").onclick = function paper() {
    let player = "paper";
    alert("You chose " + player);

    let computer = computerChoice();
    alert("Computer chose " + computer);

    playRound(player, computer);
};

document.getElementById("scissors").onclick = function scissors() {
    let player = "scissors";
    alert("You chose " + player);

    let computer = computerChoice();
    alert("Computer chose " + computer);

    playRound(player, computer);
};
