// --- Shuffle Function (Remains the same) ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Global variables
let currentQuestion = 0;
let score = 0;
let answered = false; // Flag to prevent multiple checks

const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Shuffle questions at the start
shuffleArray(questions);

function showQuestion() {
  answered = false;
  nextBtn.style.display = 'none'; // Hide Next button initially
  optionsForm.removeEventListener("change", checkAnswer); // Clean up single-select listener
  result.textContent = "";

  if (currentQuestion >= questions.length) {
    // End Quiz
    document.getElementById("quiz-box").style.display = "none";
    scoreBox.style.display = "block";
    scoreText.textContent = score;
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsForm.innerHTML = "";

  // Check if it's a multi-select question (answer is an array)
  const isMultiSelect = Array.isArray(q.answer);
  const inputType = isMultiSelect ? "checkbox" : "radio";
  const inputName = "answer-option";
  
  // Create a randomized array of options
  const randomizedOptions = [...q.options];
  shuffleArray(randomizedOptions);

  randomizedOptions.forEach((option, index) => {
    const div = document.createElement("div");
    div.classList.add("option-container"); 

    const input = document.createElement("input");
    input.type = inputType;
    input.name = inputName;
    input.id = `option-${index}`;
    input.value = option;

    const label = document.createElement("label");
    label.htmlFor = `option-${index}`;
    label.textContent = option;

    div.appendChild(input);
    div.appendChild(label);
    optionsForm.appendChild(div);
  });
  
  // --- DYNAMIC EVENT LISTENING AND SUBMIT BUTTON ---
  if (isMultiSelect) {
    // 1. Create a specific submission button for multi-select
    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-answer-btn";
    submitBtn.classList.add("btn", "submit-btn");
    submitBtn.textContent = "Submit Answer";
    
    // 2. Attach the checkAnswer logic to the submit button click
    submitBtn.addEventListener("click", checkAnswer); 
    optionsForm.appendChild(submitBtn);
    
  } else {
    // 3. For single-select, attach the checkAnswer logic to the form's change event
    optionsForm.addEventListener("change", checkAnswer);
  }
}

function checkAnswer(event) {
  if (answered) return;
  
  const q = questions[currentQuestion];
  const isMultiSelect = Array.isArray(q.answer);
  
  let userAnswers = [];
  const optionContainers = document.querySelectorAll("#options .option-container");
  const inputs = document.querySelectorAll("#options input");
  
  // Prevent form submission if it's a button click
  if (event && event.preventDefault) {
      event.preventDefault();
  }
  
  // 1. Collect user answers and disable inputs
  inputs.forEach(input => {
    if (input.checked) {
      userAnswers.push(input.value);
    }
    input.disabled = true; // Disable all inputs
  });
  
  // Disable the submit button if it exists
  const submitBtn = document.getElementById("submit-answer-btn");
  if (submitBtn) {
      submitBtn.disabled = true;
  }
  
  // 2. Determine correctness and feedback type
  let correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer]; 
  let feedback = "";
  
  const hasAllCorrect = correctAnswers.every(ans => userAnswers.includes(ans));
  const hasNoIncorrect = userAnswers.every(ans => correctAnswers.includes(ans));
  
  const allCorrectAndOnlyCorrect = hasAllCorrect && hasNoIncorrect && (userAnswers.length === correctAnswers.length);
  
  let isScorePoint = false;

  if (allCorrectAndOnlyCorrect) {
    feedback = "✅ Correct!";
    isScorePoint = true;
  } else {
    // Check for Partially Correct case (only applies if it's a multi-select question)
    if (isMultiSelect && userAnswers.length > 0 && hasAllCorrect && !hasNoIncorrect) {
        // Case: User selected ALL correct answers but also one or more incorrect ones
        feedback = `❌ Incorrect. You selected extra incorrect options.`;
    } else if (isMultiSelect && userAnswers.length > 0 && userAnswers.some(ans => correctAnswers.includes(ans)) && !hasAllCorrect) {
        // Case: User selected SOME correct answers but missed others OR selected incorrect ones
        feedback = `⚠️ Partially Correct, but incomplete or contains incorrect selections.`;
    } else {
        // All other cases (single-select mismatch, no selection, or all incorrect multi-select)
        feedback = `❌ Incorrect.`;
    }
  }

  // 3. Update score
  if (isScorePoint) {
    score++;
  }
  
  // 4. Highlight correct/incorrect options for feedback
  optionContainers.forEach(container => {
    const input = container.querySelector('input');
    
    const isUserSelected = userAnswers.includes(input.value);
    const isActualCorrect = correctAnswers.includes(input.value);

    if (isActualCorrect) {
      // Highlight all correct answers
      container.classList.add('correct'); 
    } 
    
    if (isUserSelected && !isActualCorrect) {
      // Highlight user's incorrect selections
      container.classList.add('incorrect'); 
    }
  });

  // 5. Final Result Display
  const displayAnswers = correctAnswers.join(" / ");
  
  // Append the required correct answer display regardless of the feedback type
  result.innerHTML = `
    ${feedback}
    <br>
    The correct answer(s) were: <strong>${displayAnswers}</strong>
  `;
  
  answered = true;
  nextBtn.style.display = 'block'; // Show Next button
}


// Event listener for the Next button (remains the same)
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
});

// Event listener for the Restart button (remains the same)
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreBox.style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  
  // Re-shuffle the array every time the quiz is restarted
  shuffleArray(questions);
  
  showQuestion();
});

// Start the quiz
showQuestion();
