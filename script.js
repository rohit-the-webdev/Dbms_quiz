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
const optionsContainer = document.getElementById("options"); // Changed to optionsContainer
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Shuffle questions at the start
shuffleArray(questions);

function showQuestion() {
  answered = false;
  nextBtn.style.display = 'none';
  optionsContainer.removeEventListener("change", checkAnswer); 
  result.textContent = "";

  if (currentQuestion >= questions.length) {
    // End Quiz
    document.getElementById("quiz-box").style.display = "none";
    scoreBox.style.display = "block";
    scoreText.textContent = `${score} / ${questions.length}`;
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsContainer.innerHTML = "";
  
  // Check for Short-Answer/Typing Question (if options array is missing or empty)
  const isTypingQuestion = !q.options || q.options.length === 0;

  if (isTypingQuestion) {
    // --- RENDER TYPING INPUT ---
    const inputContainer = document.createElement("div");
    inputContainer.id = "typing-input-container";
    
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "user-answer-input";
    inputField.placeholder = "Type your answer here...";
    inputField.classList.add("text-input");

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-answer-btn";
    submitBtn.classList.add("btn", "submit-btn");
    submitBtn.textContent = "Submit Answer";
    
    // Attach the checkAnswer logic to the submit button
    submitBtn.addEventListener("click", checkAnswer); 

    inputContainer.appendChild(inputField);
    inputContainer.appendChild(submitBtn);
    optionsContainer.appendChild(inputContainer);

  } else {
    // --- RENDER MULTIPLE/SINGLE CHOICE OPTIONS (Original Logic) ---
    
    // Create a form element for the radio/checkboxes
    const optionsForm = document.createElement("form");
    optionsForm.id = "options-form";

    const isMultiSelect = Array.isArray(q.answer);
    const inputType = isMultiSelect ? "checkbox" : "radio";
    const inputName = "answer-option";
    
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

    optionsContainer.appendChild(optionsForm);
    
    // --- DYNAMIC EVENT LISTENING ---
    if (isMultiSelect) {
      // Create a specific submission button for multi-select
      const submitBtn = document.createElement("button");
      submitBtn.id = "submit-answer-btn";
      submitBtn.classList.add("btn", "submit-btn");
      submitBtn.textContent = "Submit Answer";
      
      // Attach the checkAnswer logic to the submit button click
      submitBtn.addEventListener("click", checkAnswer); 
      optionsContainer.appendChild(submitBtn);
      
    } else {
      // For single-select, attach the checkAnswer logic to the form's change event
      optionsForm.addEventListener("change", checkAnswer);
    }
  }
}

/**
 * Normalizes and cleans a string for comparison.
 * Edge cases handled: Case-insensitivity, trimming whitespace.
 * @param {string} str The string to normalize.
 * @returns {string} The normalized string.
 */
function normalizeAnswer(str) {
    if (typeof str !== 'string') return '';
    // Convert to uppercase and remove all leading/trailing/multiple internal whitespace
    return str.trim().toUpperCase().replace(/\s+/g, ' '); 
}

function checkAnswer(event) {
  if (answered) return;
  
  const q = questions[currentQuestion];
  const isTypingQuestion = !q.options || q.options.length === 0;

  // Prevent default button behavior
  if (event && event.preventDefault) {
      event.preventDefault();
  }
  
  // --- A. HANDLE TYPING QUESTIONS ---
  if (isTypingQuestion) {
    const inputField = document.getElementById("user-answer-input");
    const submitBtn = document.getElementById("submit-answer-btn");

    const userAnswer = normalizeAnswer(inputField.value);
    const correctAnswer = normalizeAnswer(q.answer);
    
    inputField.disabled = true;
    submitBtn.disabled = true;

    let feedback = "";
    let isScorePoint = false;

    if (userAnswer === correctAnswer) {
        feedback = "✅ Correct!";
        isScorePoint = true;
        inputField.classList.add("correct-input");
    } else {
        feedback = "❌ Incorrect.";
        inputField.classList.add("incorrect-input");
    }
    
    if (isScorePoint) {
      score++;
    }

    // Final Result Display
    result.innerHTML = `
        ${feedback}
        <br>
        The correct answer was: <strong>${q.answer}</strong>
    `;

  } else {
    // --- B. HANDLE MULTI/SINGLE CHOICE QUESTIONS (Original Logic) ---
    const isMultiSelect = Array.isArray(q.answer);
    let userAnswers = [];
    const optionContainers = document.querySelectorAll("#options .option-container");
    const inputs = document.querySelectorAll("#options input");
    
    // 1. Collect user answers and disable inputs
    inputs.forEach(input => {
      if (input.checked) {
        userAnswers.push(input.value);
      }
      input.disabled = true;
    });
    
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
      if (isMultiSelect && userAnswers.length > 0 && hasAllCorrect && !hasNoIncorrect) {
          feedback = `❌ Incorrect. You selected extra incorrect options.`;
      } else if (isMultiSelect && userAnswers.length > 0 && userAnswers.some(ans => correctAnswers.includes(ans)) && !hasAllCorrect) {
          feedback = `⚠️ Partially Correct, but incomplete or contains incorrect selections.`;
      } else {
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
        container.classList.add('correct'); 
      } 
      
      if (isUserSelected && !isActualCorrect) {
        container.classList.add('incorrect'); 
      }
    });

    // 5. Final Result Display
    const displayAnswers = correctAnswers.join(" / ");
    
    result.innerHTML = `
      ${feedback}
      <br>
      The correct answer(s) were: <strong>${displayAnswers}</strong>
    `;
  } // End of Choice Questions Logic

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
