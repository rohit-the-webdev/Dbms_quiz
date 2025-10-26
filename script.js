let currentQuestionIndex = 0;
let score = 0;
// Note: 'questions' array is assumed to be loaded from 'questions.js'
let shuffledQuestions = []; // Array to hold the shuffled questions
const totalQuestions = questions.length;
let hasAnswered = false; // Flag to prevent re-answering a question

// Get DOM elements
const scoreDisplay = document.getElementById('score-display');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const checkButton = document.getElementById('check-answer-button');
const resultContainer = document.getElementById('result-container');
const quizArea = document.getElementById('quiz-area');


// Fisher-Yates (Knuth) Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score} / ${totalQuestions}`;
}

function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }

    const q = shuffledQuestions[currentQuestionIndex];
    
    // Reset state for new question
    hasAnswered = false;
    checkButton.disabled = false; // Re-enable check button for the new question
    questionText.textContent = `Q${currentQuestionIndex + 1} of ${totalQuestions}: ${q.question}`;
    optionsContainer.innerHTML = '';
    resultContainer.style.display = 'none';
    resultContainer.textContent = '';
    nextButton.disabled = true;

    // --- Determine Question Type and Render Options ---
    const isMultipleSelect = Array.isArray(q.answer) && q.answer.length > 1;
    const isShortAnswer = q.options.length === 0;

    // Show Check Answer button only for MSQ and SA
    checkButton.style.display = (isMultipleSelect || isShortAnswer) ? 'block' : 'none';

    if (isShortAnswer) {
        // Short Answer (SA): Renders a text input field
        optionsContainer.innerHTML = `<input type="text" id="sa-input" placeholder="Enter your answer (case/whitespace-sensitive for exact match)">`;
        
        // Explicit check for SA: Attach to the Check Answer button
        checkButton.onclick = () => checkAnswer(q);

    } else {
        // MCQ or MSQ: Renders radio buttons or checkboxes
        const inputType = isMultipleSelect ? "checkbox" : "radio";
        const displayOptions = [...q.options];

        displayOptions.forEach((option, index) => {
            optionsContainer.innerHTML += `
                <label>
                    <input type="${inputType}" name="option" value="${option}" id="option${index}">
                    ${option}
                </label>`;
        });

        // Immediate check for MCQ (radio buttons)
        if (!isMultipleSelect) {
            optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
                // Attach checkAnswer directly to the change event
                radio.addEventListener('change', () => checkAnswer(q));
            });
            // Ensure the Check Answer button is hidden for MCQ
            checkButton.style.display = 'none';
        } 
        // Explicit check for MSQ (checkboxes): Attach to the Check Answer button
        else {
            checkButton.onclick = () => checkAnswer(q);
        }
    }

    updateScoreDisplay();
}

function checkAnswer(q) {
    if (hasAnswered) return;

    let isCorrect = false;
    const allLabels = optionsContainer.querySelectorAll('label');
    const isShortAnswer = q.options.length === 0;

    // --- 1. Handling Short Answer (SA) ---
    if (isShortAnswer) {
        const saInput = document.getElementById('sa-input');
        const userAnswer = saInput.value.trim(); 
        const correctAnswer = q.answer.toString().trim();

        if (userAnswer === correctAnswer) {
            isCorrect = true;
        }
        saInput.disabled = true; // Disable input after check
    }
    // --- 2. Handling Multiple Select/Choice (MSQ/MCQ) ---
    else {
        const selectedOptions = Array.from(optionsContainer.querySelectorAll('input[name="option"]:checked')).map(input => input.value);
        const correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];

        // Check if all correct answers were selected AND no incorrect answers were selected
        isCorrect = selectedOptions.length === correctAnswers.length &&
                    selectedOptions.every(val => correctAnswers.includes(val));

        // Apply visual feedback and disable all options
        allLabels.forEach(label => {
            const input = label.querySelector('input');
            const optionValue = input.value;
            input.disabled = true; 

            if (correctAnswers.includes(optionValue)) {
                label.classList.add('correct-answer');
            }
            else if (selectedOptions.includes(optionValue)) {
                 label.classList.add('incorrect');
            }
        });
    }

    // --- 3. Update Score and Display Result ---
    if (isCorrect) {
        score++;
        resultContainer.textContent = 'Correct! 🎉';
        resultContainer.className = 'correct';
    } else {
        let correctAnswerText = Array.isArray(q.answer) ? q.answer.join(' AND ') : q.answer;
        resultContainer.textContent = `Incorrect. The correct answer(s) is/are: ${correctAnswerText}`;
        resultContainer.className = 'incorrect';
    }

    resultContainer.style.display = 'block';
    hasAnswered = true; 
    updateScoreDisplay();
    checkButton.disabled = true; 
    nextButton.disabled = false; // Crucially, enable the Next button regardless of answer
}

function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    // Final results screen
    quizArea.innerHTML = `
        <h2>Quiz Finished! </h2>
        <p>You have completed all ${totalQuestions} questions.</p>
        <p>Your final score is: <strong>${score} / ${totalQuestions}</strong></p>
        <div id="button-container">
            <button onclick="window.location.reload()">Start Over</button>
        </div>
    `;
    scoreDisplay.style.display = 'none'; 
}

// Initial load: Starts the quiz when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    // Clone the original array and shuffle it
    shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
    loadQuestion();
});
