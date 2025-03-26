// 🏆 Rock, Paper, Scissors Game in Node.js
const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "🤝 It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    )
    {
        return "🎉 You win!";
    } else {
        return "😞 You lose!";
    }
}

// Function to play the game
function playGame() {
    rl.question("Enter Rock, Paper, or Scissors: ", function (userInput) {
        let userChoice = userInput.trim().toLowerCase();

        if (!["rock", "paper", "scissors"].includes(userChoice)) {
            console.log("❌ Invalid choice! Please enter Rock, Paper, or Scissors.");
            rl.close();
            return;
        }

        let computerChoice = getComputerChoice();
        console.log(`🧑 You chose: ${userChoice}`);
        console.log(`🤖 Computer chose: ${computerChoice}`);

        let result = determineWinner(userChoice, computerChoice);
        console.log(result);

        rl.close(); // Close the readline interface
    });
}

// Start the game
playGame();
