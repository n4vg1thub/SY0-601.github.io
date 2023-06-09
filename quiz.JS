// Define an array of question objects
var questions = [
    {
        questionNumber: 1,
        questionText: 'Question 1: What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 1,
        explanation: 'Paris is the capital of France.'
    },
    // Add more questions here...
















];

var currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    document.getElementById('question-number').textContent = 'Question ' + currentQuestion.questionNumber;
    document.getElementById('question-text').textContent = currentQuestion.questionText;
    
    var optionsList = document.getElementById('options-list');
    var labels = optionsList.getElementsByTagName('label');

    for (var i = 0; i < currentQuestion.options.length; i++) {
        labels[i].textContent = currentQuestion.options[i];
    }
    
    var explanationText = document.querySelector('.explanation-text');
    if (currentQuestion.explanation) {
        explanationText.textContent = currentQuestion.explanation;
        explanationText.style.display = 'none';
    } else {
        explanationText.style.display = 'none';
    }
    
    // Clear selected answer
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }
    
    // Remove highlighting classes
    var options = optionsList.getElementsByTagName('li');
    for (var j = 0; j < options.length; j++) {
        options[j].classList.remove('correct', 'wrong');
    }
}

// Event listener for the "Submit" button
document.getElementById('submit-answer').addEventListener('click', function() {
    var currentQuestion = questions[currentQuestionIndex];
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var selectedOptionIndex = parseInt(selectedOption.id.slice(-1));

        if (selectedOptionIndex === currentQuestion.correctAnswer) {
            selectedOption.parentNode.classList.add('correct');
        } else {
            selectedOption.parentNode.classList.add('wrong');
        }
    }
});

// Event listener for the "Next Question" button
document.getElementById('next-question').addEventListener('click', function() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert('You have completed all the questions!');
    }
});

// Event listener for the "Show Explanation" button
document.getElementById('show-explanation').addEventListener('click', function() {
    var explanationText = document.querySelector('.explanation-text');
    explanationText.style.display = (explanationText.style.display === 'none') ? 'block' : 'none';
});

// Display the first question
displayQuestion();
