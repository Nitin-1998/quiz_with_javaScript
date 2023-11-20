// define questions in const
 

 


const questions = [
  {
    question: " JavaScript is an an ___________ language ? ",
    answers: [
      { text: "Object-Based", correct: false },
      { text: "Object-Oriented", correct: true },
      { text: "Procedural", correct: false },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: [
      { text: "Throws an erroe", correct: false },
      { text: "Ignores the statement", correct: true },
      { text: "Gives an warning", correct: false },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "getElementById()", correct: false },
      { text: "getElementbyIdClassName()", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "Which of the following methods can be used to display data in some form using Javascript? methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "document.write()", correct: false },
      { text: "console.log()", correct: false },
      { text: "window.alert()", correct: false },
      { text: "All of the above", correct: true },
    ],
  },

  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "constant", correct: false },
      { text: "var", correct: false },
    ],
  },

  {
    question: " What keyword is used to check whether a given property is valid or not? ",
    answers: [
      { text: "in", correct: true },
      { text: "is in", correct: false },
      { text: "exists", correct: false },
      { text: "lies", correct: false },
    ],
  },
];

let questionArea = document.getElementById("qustionShowArea");
let answerBtn = document.getElementById("answer-btn");
let nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//Below will start the quiz
function startquiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showquestion();
}

//below function will show question in a question box
function showquestion() {
  // (step 3)it will reset the previous questions and answers
  resetState();

  // (step 1)it will reset the previous questions and answers
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;

  questionArea.innerHTML = questionNumber + ". " + currentQuestion.question;

  // (step 2)to display the answers from the currect question
  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);

    //(step 4) To check whether answer is correct ✨✨✨✨
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // continue above: (step 5) click functions on answer buttons

    button.addEventListener('click', function chunaGayaJawab(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            // to incraese the score after selecting an correct answer
            score ++;
        }else{
            selectedBtn.classList.add("incorrect");
        }

        // (Step-5) : to disable other unselected buttons after selecting one button, and also highlighting correct answer after selecting the wrong answer ✨✨✨
        
        Array.from(answerBtn.children).forEach(button =>{ 
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
            
            // console.log(button);
        });
        nextBtn.style.display ="block"

    })
  });
}

//(step 3)it will reset the previous questions and answers
function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);

  }
}

// to show score
function showScore(){
    resetState();
    questionArea.innerHTML = `your score ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display ="block";

}

function handleNextButton(){
    currentQuestionIndex ++ ;
    if(currentQuestionIndex < questions.length){
        showquestion();
    }else{
        showScore();
    }
}

//(Step 6) functionality for the next button i.e to show next question

nextBtn.addEventListener('click', function(){
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startquiz()
    }
})





startquiz();
