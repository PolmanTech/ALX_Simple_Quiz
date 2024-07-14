const correctAnswer = '4';
const userInputs = document.querySelectorAll('input[name="quiz"]');

userInputs.forEach(function (radio) {
    radio.addEventListener('change', function () {
        if (radio.checked) {
            const userAnswer = radio.value;
            function checkAnswer() {
                if (userAnswer === correctAnswer) {
                    document.querySelector('#feedback').textContent = "Correct! Well done.";
                    document.querySelector('#feedback').style.color = "green";
                } else {
                    document.querySelector('#feedback').textContent = "That's incorrect. Try again!";
                    document.querySelector('#feedback').style.color = "red";
                }
            }

            document.getElementById('submit-answer').addEventListener('click', checkAnswer);
        }
    })
});