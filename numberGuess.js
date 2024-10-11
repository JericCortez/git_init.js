const correctNumber = Math.floor(Math.random() * 10) + 1;

let guess = Number(prompt("Guess a number between 1 and 10:"));

while (guess !== correctNumber) {
    if (guess < correctNumber) {
        console.log("Too low! Try again.");
    } else if (guess > correctNumber) {
        console.log("Too high! Try again.");
    }
    guess = Number(prompt("Guess again:"));
}

console.log("Congratulations! You guessed the correct number.");