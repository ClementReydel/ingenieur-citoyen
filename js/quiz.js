function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("result").textContent = "";
    document.getElementById("next").style.display = "none";
    
    let questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    let answers = [...questionObj.answers];
    shuffleArray(answers);
    
    answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.textContent = answer.text;
        button.onclick = () => checkAnswer(button, answer.correct, answer.explanation);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedButton, isCorrect, explanation) {
    const resultElement = document.getElementById("result");
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => {
        btn.disabled = true;
        let correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct);
        if (btn.textContent === correctAnswer.text) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("incorrect");
        }
    });
    
    let correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct);
    
    if (isCorrect) {
        resultElement.textContent = "✅ Bonne réponse !";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.innerHTML = `❌ Mauvaise réponse. ${explanation}<br><br>✅ Bonne réponse : ${correctAnswer.explanation}`;
        resultElement.style.color = "red";
    }
    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById("quiz").innerHTML = `<h2>Quiz terminé !</h2><p>Votre score est de ${score} / ${questions.length}.</p>`;
}

loadQuestion();