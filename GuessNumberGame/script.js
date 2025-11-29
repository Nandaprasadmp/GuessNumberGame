let number = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    attempts++;

    if (guess == "") {
        document.getElementById("result").innerHTML = "Please enter a number!";
        return;
    }

    if (guess < number) {
        document.getElementById("result").innerHTML = "Too low! Try again.";
    } 
    else if (guess > number) {
        document.getElementById("result").innerHTML = "Too high! Try again.";
    } 
    else {
        document.getElementById("result").innerHTML = 
            `🎉 Congratulations! You guessed it right: ${number}`;
    }
    
    document.getElementById("attempts").innerHTML = `Attempts: ${attempts}`;
}

function resetGame() {
    number = Math.floor(Math.random() * 50) + 1;
    attempts = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("attempts").innerHTML = "";
    document.getElementById("guessInput").value = "";
}
