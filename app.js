let Answer = [
    {
        Q: "B"
    },
    {   
        Q: "B"
    },
    {
        Q: "A"
    },
    {
        Q: "B"
    },
    {
        Q: "C"
    },
    {
        Q: "B"
    },
    {
        Q: "B"
    },
    {
        Q: "B"
    },
    {
        Q: "A"
    },
    {
        Q: "C"
    }
]

if (!localStorage.getItem("quizScore")) {
    localStorage.setItem("quizScore", "0");
}

if (!localStorage.getItem("wrongAnswers")) {
    localStorage.setItem("wrongAnswers", "0");
}

            let currentScore = "";

function checkAnswer (button, questionIndex) {
        userAnswer = button.id;
        const correctAnswer = Answer[questionIndex].Q;
        console.log(userAnswer);
        console.log(correctAnswer);

        if ( userAnswer == correctAnswer) {
            button.style.backgroundColor = "#00FF09"
            button.style.color = "white"
            parseInt(localStorage.getItem("quizScore")); 
            let currentScore = parseInt(localStorage.getItem("quizScore"));
            currentScore += 1;
            localStorage.setItem("quizScore", currentScore.toString());
        } else {
            button.style.backgroundColor = "red"
            button.style.color = "white"
            parseInt(localStorage.getItem("wrongAnswers"));
            let currentWrong = parseInt(localStorage.getItem("wrongAnswers"));
            currentWrong += 1;
            localStorage.setItem("wrongAnswers", currentWrong.toString());
        }

        const allButtons = document.querySelectorAll(".option-a");
        allButtons.forEach(btn => btn.disabled = true);
        console.log(localStorage.getItem("quizScore"));
        console.log(localStorage.getItem("wrongAnswers"));
    }

function submitScoreBtn() {
    let currentScore = localStorage.getItem("quizScore"); // Declare currentScore with let or const
    console.log(currentScore);
    console.log(localStorage.getItem("wrongAnswers"));
 }

document.addEventListener('DOMContentLoaded', () => {
    
    let currentScore = localStorage.getItem("quizScore"); // Declare currentScore with let or const
    const finalScoreElement = document.querySelector(".js-final-score");
    if (finalScoreElement) { // Check if the element exists before trying to set its properties
        finalScoreElement.innerHTML = currentScore; // Correct property name is innerHTML (case-sensitive)
    } else {
        console.error("Error: Element with class 'js-final-score' not found.");
    }
    console.log(localStorage.getItem("quizScore"));
    console.log(localStorage.getItem("wrongAnswers"));

    let percentScore = (currentScore / 10) * 100;
    const displayScoredElement = document.querySelector(".js-display-scored");
    if (displayScoredElement) {
        displayScoredElement.innerHTML = percentScore + "%";

    } else {
        console.error("Error: Element with class 'js-display-scored p' not found.");
    }

    document.getElementById("contain").innerHTML += ` <p></p>
                <p class="score-remark">Good!</p>
                <p class="scores js-final-score">${currentScore} / 10</p>`
});
