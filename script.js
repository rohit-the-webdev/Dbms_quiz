// --- Constants for Local Storage Keys ---
const CURRENT_QUESTION_KEY = 'quizCurrentQuestion';
const CURRENT_SCORE_KEY = 'quizScore';
const QUESTIONS_SHUFFLE_KEY = 'quizQuestionsShuffle';
const USER_NAME_KEY = 'quizUserName'; 

// --- Prank Configuration ---
const PRANK_NAMES = ['prajakta', 'prajkta', 'praju', 'praj', 'shirke'];
const PRANK_MESSAGE = "get well soon shirkyaaa";
const PRANK_DURATION_MS = 5000; // 5 seconds

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
let userName = ''; 

// DOM Elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreBox = document.getElementById("score-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const topRestartBtn = document.getElementById("top-restart-btn"); // NEW

// NEW: DOM Elements for Modal/Prank/Spinner
const modalOverlay = document.getElementById('name-modal-overlay');
const nameInputBox = document.getElementById('name-input-box');
const nameInput = document.getElementById('name-input');
const nameSubmitBtn = document.getElementById('name-submit-btn');
const prankPopup = document.getElementById('prank-popup');
const prankMessage = document.getElementById('prank-message');
const loadingSpinner = document.getElementById('loading-spinner'); // NEW


// ==========================================================
// --- LOCAL STORAGE FUNCTIONS ---
// ==========================================================

function saveQuizState() {
    try {
        localStorage.setItem(CURRENT_QUESTION_KEY, currentQuestion.toString());
        localStorage.setItem(CURRENT_SCORE_KEY, score.toString());
        localStorage.setItem(USER_NAME_KEY, userName); 
        localStorage.setItem(QUESTIONS_SHUFFLE_KEY, JSON.stringify(questions));
    } catch (e) {
        console.error("Error saving quiz state to localStorage:", e);
    }
}

function loadQuizState() {
    try {
        const savedIndex = localStorage.getItem(CURRENT_QUESTION_KEY);
        const savedScore = localStorage.getItem(CURRENT_SCORE_KEY);
        const savedName = localStorage.getItem(USER_NAME_KEY);
        const savedQuestionsJSON = localStorage.getItem(QUESTIONS_SHUFFLE_KEY);

        if (savedQuestionsJSON) {
            const savedQuestions = JSON.parse(savedQuestionsJSON);
            
            if (savedQuestions.length === questions.length) {
                questions.length = 0; 
                questions.push(...savedQuestions); 
                
                currentQuestion = parseInt(savedIndex) || 0;
                score = parseInt(savedScore) || 0;
                userName = savedName || ''; 
                
                // Only return true if progress exists to signal resuming
                return currentQuestion > 0; 
            } else {
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
    // Note: We keep the USER_NAME_KEY to remember the user's name
}


// ==========================================================
// --- NAME PROMPT AND PRANK LOGIC ---
// ==========================================================

function startQuiz() {
    // Hide modal, show quiz, show top restart button
    modalOverlay.style.display = 'none';
    document.getElementById("quiz-box").style.display = "block";
    topRestartBtn.style.display = 'block'; 
    showQuestion();
}

/**
 * Executes the prank logic with a delay.
 * isInitialEntry is true ONLY on the first-time name submission.
 */
function handlePrank(name, isInitialEntry) {
    const normalizedName = name.toLowerCase().trim();
    let isPrankTarget = false;
    let delay = 1000; // Default quick start for unknown names

    for (const target of PRANK_NAMES) {
        if (normalizedName.includes(target)) {
            isPrankTarget = true;
            // Only use the long delay if this is the first submission
            delay = isInitialEntry ? PRANK_DURATION_MS : 1000; 
            break;
        }
    }

    nameInputBox.style.display = 'none'; 

    if (isPrankTarget) {
        prankPopup.style.display = 'block'; 
        prankMessage.textContent = PRANK_MESSAGE;
        // Show spinner only during the prank delay
        loadingSpinner.style.display = 'inline-block'; 
    } else {
        // Quick 100ms delay for normal names for smoother transition
        delay = 100;
    }

    setTimeout(() => {
        loadingSpinner.style.display = 'none'; // Hide spinner
        startQuiz(); 
    }, delay);
}

function promptUserName() {
    const savedName = localStorage.getItem(USER_NAME_KEY);
    
    // Set up the modal display
    modalOverlay.style.display = 'flex';
    nameInputBox.style.display = 'block';
    prankPopup.style.display = 'none';

    // If name is saved, pre-fill it for convenience
    if (savedName) {
        nameInput.value = savedName;
    }

    // Handler for the submit button
    nameSubmitBtn.onclick = () => { // Use onclick to easily override the listener
        const inputName = nameInput.value.trim();
        if (inputName) {
            userName = inputName;
            localStorage.setItem(USER_NAME_KEY, userName); 
            // This is the FIRST TIME submission of the current session
            handlePrank(userName, true); 
        } else {
            alert("Please enter a name to start the quiz!");
        }
    };
}


// ==========================================================
// --- CORE QUIZ LOGIC (Spinner integration) ---
// ==========================================================

function showQuestion() {
  answered = false;
  nextBtn.style.display = 'none';
  optionsContainer.removeEventListener("change", checkAnswer); 
  result.textContent = "";

  // NEW: Show spinner briefly before question loads (simulating load time)
  loadingSpinner.style.display = 'inline-block';
  
  // Use a minimal timeout to ensure the spinner displays before rendering the question
  setTimeout(() => {
    loadingSpinner.style.display = 'none';
    
    if (currentQuestion >= questions.length) {
      document.getElementById("quiz-box").style.display = "none";
      scoreBox.style.display = "block";
      topRestartBtn.style.display = 'none';
      scoreText.textContent = `${score} / ${questions.length}`;
      clearQuizState();
      return;
    }

    const q = questions[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
    optionsContainer.innerHTML = "";
    
    const isTypingQuestion = !q.options || q.options.length === 0;

    // ... (rest of the showQuestion logic remains the same) ...

    if (isTypingQuestion) {
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
    // Ensure question text reflects the actual question, not just "Loading"
    questionText.innerHTML = `${currentQuestion + 1}. ${q.question} <span id="loading-spinner" class="spinner"></span>`;
    
  }, 150); // Small 150ms delay for spinner visibility
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
    
    result.innerHTML = `${feedback}<br>The correct answer was: <strong>${q.answer}</strong>`;

  } else {
    const isMultiSelect = Array.isArray(q.answer);
    let userAnswers = [];
    const optionContainers = document.querySelectorAll("#options .option-container");
    const inputs = document.querySelectorAll("#options input");
    
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

    const displayAnswers = correctAnswers.join(" / ");
    result.innerHTML = `${feedback}<br>The correct answer(s) were: <strong>${displayAnswers}</strong>`;
  } 

  if (isScorePoint) {
    score++;
  }
  
  answered = true;
  nextBtn.style.display = 'block'; 
  
  saveQuizState();
}

// --- Combined Restart Logic ---
function handleRestartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreBox.style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  topRestartBtn.style.display = 'none'; // Hide top restart button
  
  shuffleArray(questions);
  
  clearQuizState();
  
  // Re-prompt for name (will auto-fill the saved name)
  promptUserName(); 
}

// --- EVENT LISTENERS ---
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
  saveQuizState();
});

// Listener for the button in the score box
restartBtn.addEventListener("click", handleRestartQuiz);

// Listener for the new top-right button
topRestartBtn.addEventListener("click", handleRestartQuiz);


// ==========================================================
// --- INITIALIZATION ---
// ==========================================================

function initializeApp() {
    // 1. Attempt to load any saved quiz state (progress > 0)
    const isResuming = loadQuizState();

    if (isResuming) {
        // If resuming a quiz with progress, skip the entire name prompt/prank process
        // and start the quiz immediately to avoid the 5-second delay.
        startQuiz();
        return;
    }

    // 2. If not resuming (new quiz or quiz finished), shuffle new questions.
    shuffleArray(questions);

    // 3. Prompt for the user's name. This handles both first-time entry
    //    and restarting a finished quiz.
    promptUserName();
}

// Start the app logic
initializeApp();


// --- WINDOW UNLOAD EVENT LISTENER for robust saving ---
window.addEventListener('pagehide', saveQuizState);
window.addEventListener('beforeunload', saveQuizState);
