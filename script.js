const dateBetween = (start, end) => {
    const startTime = start.getTime();
    const endTime = end.getTime();
    
    const randomTime = parseInt(startTime + Math.random() * (endTime - startTime));
    return new Date(randomTime);
}

const dateText = document.getElementById("date");

let currentDate = dateBetween(
    new Date("1000-01-01"),
    new Date("3000-01-01")
);
dateText.textContent = currentDate.toLocaleDateString();


let correct = 0;
let incorrect = 0;

let correctText = document.getElementById("correct");
let incorrectText = document.getElementById("incorrect");

const checkAnswer = (answer) => {
    if (answer == currentDate.getDay()) {
        correct += 1;
        correctText.textContent = correct;
    } else {
        incorrect += 1;
        incorrectText.textContent = incorrect;
    }

    currentDate = dateBetween(
        new Date("1000-01-01"),
        new Date("3000-01-01")
    );
    dateText.textContent = currentDate.toLocaleDateString();
}