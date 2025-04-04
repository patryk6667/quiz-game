function submitQuiz() {
   const form = document.getElementById("quiz-form");
  const correctAnswers = {
        q1: "Paris",
        q2: "Einstein",
        q3: "Jupiter",
        q4: "Da Vinci",
        q5: "H2O",
        q6: "George Washington"
    };

    let score = 0;
    const formData = new FormData(form);
formData.forEach((value, key) => {
        if (value === correctAnswers[key]) {
            score++;
        }
    });

  const result = document.getElementById("result");
    result.innerHTML = `You scored ${score} out of 6!`;

 document.querySelector('button').disabled = true;
}
