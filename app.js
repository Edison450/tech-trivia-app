function checkAnswer(button) {
    const correctAnswer = "A";
    if ( button.id === correctAnswer) {
        button.style.backgroundColor = "green"
        button.style.color = "white"
    } else {
        button.style.backgroundColor = "red"
        button.style.color = "white"
    }

    const allButtons = document.querySelectorAll(".option-a");
        allButtons.forEach(btn => btn.disabled = true);
}