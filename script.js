// --- Constants for Local Storage Keys ---
const CURRENT_QUESTION_KEY = 'quizCurrentQuestion';
const CURRENT_SCORE_KEY = 'quizScore';
const QUESTIONS_SHUFFLE_KEY = 'quizQuestionsShuffle';


// --- Shuffle Function (Remains the same) ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Normalizes and cleans a string for comparison.
 */
function normalizeAnswer(str) {
    if (typeof str !== 'string') return '';
    return str.trim().toUpperCase().replace(/\s+/g, ' '); 
}

// Global variables
let currentQuestion = 0;
let score = 0;
let answered = false; 

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");


// ==========================================================
// --- NEW: LOCAL STORAGE FUNCTIONS ---
// ==========================================================

function saveQuizState() {
    try {
        // 1. Save index and score
        localStorage.setItem(CURRENT_QUESTION_KEY, currentQuestion.toString());
        localStorage.setItem(CURRENT_SCORE_KEY, score.toString());
        
        // 2. Save the currently shuffled order of questions
        // This is crucial so the user doesn't see a new random question on resume
        localStorage.setItem(QUESTIONS_SHUFFLE_KEY, JSON.stringify(questions));
    } catch (e) {
        console.error("Error saving quiz state to localStorage:", e);
    }
}

function loadQuizState() {
    try {
        const savedIndex = localStorage.getItem(CURRENT_QUESTION_KEY);
        const savedScore = localStorage.getItem(CURRENT_SCORE_KEY);
        const savedQuestionsJSON = localStorage.getItem(QUESTIONS_SHUFFLE_KEY);

        if (savedQuestionsJSON) {
            const savedQuestions = JSON.parse(savedQuestionsJSON);
            
            // Check if the saved question count matches the current questions array length
            // This prevents errors if you change the questions.js file
            if (savedQuestions.length === questions.length) {
                // Overwrite the globally loaded 'questions' array with the saved shuffled state
                questions.length = 0; // Clear the array
                questions.push(...savedQuestions); // Populate it with the saved state
                
                // Load saved progress
                currentQuestion = parseInt(savedIndex) || 0;
                score = parseInt(savedScore) || 0;
                console.log(`Resuming quiz from Question: ${currentQuestion + 1}, Score: ${score}`);
                return true;
            } else {
                console.warn("Questions file changed. Starting a new quiz.");
                return false;
            }
        }
    } catch (e) {
        console.error("Error loading quiz state from localStorage:", e);
    }
    return false;
}

function clearQuizState() {
    localStorage.removeItem(CURRENT_QUESTION_KEY);
    localStorage.removeItem(CURRENT_SCORE_KEY);
    localStorage.removeItem(QUESTIONS_SHUFFLE_KEY);
}


// ==========================================================
// --- INITIALIZATION ---
// ==========================================================

const isResuming = loadQuizState();

// If not resuming, or if the load failed, shuffle the new array.
if (!isResuming) {
    shuffleArray(questions);
}


// ==========================================================
// --- CORE QUIZ LOGIC (Modified to call saveQuizState) ---
// ==========================================================

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
    
    // NEW: Clear state when quiz is finished
    clearQuizState();
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsContainer.innerHTML = "";
  
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
    
    submitBtn.addEventListener("click", checkAnswer); 

    inputContainer.appendChild(inputField);
    inputContainer.appendChild(submitBtn);
    optionsContainer.appendChild(inputContainer);

  } else {
    // --- RENDER MULTIPLE/SINGLE CHOICE OPTIONS ---
    
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
      const submitBtn = document.createElement("button");
      submitBtn.id = "submit-answer-btn";
      submitBtn.classList.add("btn", "submit-btn");
      submitBtn.textContent = "Submit Answer";
      
      submitBtn.addEventListener("click", checkAnswer); 
      optionsContainer.appendChild(submitBtn);
      
    } else {
      optionsForm.addEventListener("change", checkAnswer);
    }
  }
}

function checkAnswer(event) {
  if (answered) return;
  
  const q = questions[currentQuestion];
  const isTypingQuestion = !q.options || q.options.length === 0;

  if (event && event.preventDefault) {
      event.preventDefault();
  }
  
  let isScorePoint = false;
  let feedback = "";

  if (isTypingQuestion) {
    // --- A. HANDLE TYPING QUESTIONS ---
    const inputField = document.getElementById("user-answer-input");
    const submitBtn = document.getElementById("submit-answer-btn");

    const userAnswer = normalizeAnswer(inputField.value);
    const correctAnswer = normalizeAnswer(q.answer);
    
    inputField.disabled = true;
    submitBtn.disabled = true;

    if (userAnswer === correctAnswer) {
        feedback = "✅ Correct!";
        isScorePoint = true;
        inputField.classList.add("correct-input");
    } else {
        feedback = "❌ Incorrect.";
        inputField.classList.add("incorrect-input");
    }
    
    // Final Result Display
    result.innerHTML = `${feedback}<br>The correct answer was: <strong>${q.answer}</strong>`;

  } else {
    // --- B. HANDLE MULTI/SINGLE CHOICE QUESTIONS ---
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
    
    const hasAllCorrect = correctAnswers.every(ans => userAnswers.includes(ans));
    const hasNoIncorrect = userAnswers.every(ans => correctAnswers.includes(ans));
    const allCorrectAndOnlyCorrect = hasAllCorrect && hasNoIncorrect && (userAnswers.length === correctAnswers.length);
    
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

    // 3. Highlight correct/incorrect options for feedback
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

    // 4. Final Result Display
    const displayAnswers = correctAnswers.join(" / ");
    result.innerHTML = `${feedback}<br>The correct answer(s) were: <strong>${displayAnswers}</strong>`;
  } 

  // --- SCORE UPDATE AND SAVE ---
  if (isScorePoint) {
    score++;
  }
  
  answered = true;
  nextBtn.style.display = 'block'; 
  
  // NEW: Save state after checking the answer
  saveQuizState();
}


// --- EVENT LISTENERS ---
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
  // NEW: Save state after moving to the next question
  saveQuizState();
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreBox.style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  
  // Re-shuffle the array every time the quiz is restarted
  shuffleArray(questions);
  
  // NEW: Clear saved state when restarting
  clearQuizState();
  
  showQuestion();
});

// Start the quiz
showQuestion();
  
