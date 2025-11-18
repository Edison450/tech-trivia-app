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

function checkAnswer (button, questionIndex) {
        userAnswer = button.id;
        const correctAnswer = Answer[questionIndex].Q;
        console.log(userAnswer);
        console.log(correctAnswer);

        if ( userAnswer == correctAnswer) {
        button.style.backgroundColor = "#00FF09"
        button.style.color = "white"
        } else {
            button.style.backgroundColor = "red"
            button.style.color = "white"
        }

        const allButtons = document.querySelectorAll(".option-a");
        allButtons.forEach(btn => btn.disabled = true);

    }
