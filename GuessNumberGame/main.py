import random

print("Welcome to Guess the Number Game!")
number = random.randint(1, 50)
guess = 0
attempts = 0

while guess != number:
    guess = int(input("Guess a number between 1 and 50: "))
    attempts += 1
    if guess < number:
        print("Too low! Try again.")
    elif guess > number:
        print("Too high! Try again.")
    else:
        print(f"Congratulations! You guessed the number {number} in {attempts} attempts.")
