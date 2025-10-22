// --- Shuffle Function (Added) ---
/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array The array to shuffle.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random element before the current element
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the random element
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Global variables remain the same
let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// --- Initialization: Shuffle questions array once at the start (Modified) ---
shuffleArray(questions);

function showQuestion() {
  const q = questions[currentQuestion];
  
  // Handle multi-answer questions for display simplicity (Optional: you might want to adjust the selectAnswer logic for these)
  let answerDisplay = Array.isArray(q.answer) ? q.answer.join(", ") : q.answer;

  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsBox.innerHTML = "";

  // Also randomize the options to make the quiz harder (Added)
  const options = [...q.options];
  shuffleArray(options);

  options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = option;
    // Note: The selectAnswer function handles the single/multiple answer logic based on your original 'questions' structure.
    div.addEventListener("click", () => selectAnswer(div, q.answer));
    optionsBox.appendChild(div);
  });

  result.textContent = "";
  nextBtn.style.display = 'none'; // Hide next button until an answer is selected
}

function selectAnswer(selected, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach(o => o.style.pointerEvents = "none");
  nextBtn.style.display = 'block'; // Show next button after selecting

  // Handle both single string answer and array of answers (as present in your data)
  const isCorrect = Array.isArray(correctAnswer) 
    ? correctAnswer.includes(selected.textContent)
    : selected.textContent === correctAnswer;

  if (isCorrect) {
    selected.classList.add("correct");
    result.textContent = "✅ Correct!";
    score++;
  } else {
    selected.classList.add("incorrect");
    
    // Display all correct answers clearly
    let answerDisplay = Array.isArray(correctAnswer) ? correctAnswer.join(" / ") : correctAnswer;

    // Highlight the *actual* correct options in green even if the user chose incorrectly
    options.forEach(o => {
        const isActualCorrect = Array.isArray(correctAnswer) 
            ? correctAnswer.includes(o.textContent)
            : o.textContent === correctAnswer;
        
        if (isActualCorrect) {
            // Apply a subtle green background for correct options the user didn't choose
            if (o !== selected) {
                o.classList.add("correct-missed");
            }
        }
    });

    result.textContent = `❌ The correct answer(s) are: ${answerDisplay}`;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    scoreBox.style.display = "block";
    scoreText.textContent = `${score} / ${questions.length}`;
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreBox.style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  
  // --- Restart: Re-shuffle the array every time the quiz is restarted (Modified) ---
  shuffleArray(questions);
  
  showQuestion();
});

showQuestion();

/* * IMPORTANT NOTE: Your 'questions' data contains some questions with an array 
* of answers (multiple correct options). The provided 'selectAnswer' logic 
* assumes a single-choice quiz format. I have modified 'selectAnswer' to
* better handle this ambiguity, but for a true multi-select quiz, you would 
* need to change the HTML structure (e.g., use checkboxes) and the 'selectAnswer' 
* function to allow multiple selections before checking the final answer.
*/
