const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "London", "Paris", "Madrid"],
    answer: "Rome",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "London", "Paris", "Berlin"],
    answer: "Madrid",
  },
];

const container = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-btn");
const score = document.querySelector(".score");

let questionIndex = 0;
let scoreValue = 0;

const renderQuestion = () => {
  container.innerHTML = "";
  const currentQuestion = questions[questionIndex];
  const questionElement = document.createElement("h2");
  questionElement.textContent = currentQuestion.question;
  container.appendChild(questionElement);

  //   container.innerHTML += `
  //     <div class="options">
  //     ${currentQuestion.options
  //       .map((option) => {
  //         return `
  //         <input type="radio" name="option" value="${option}">
  //         <label for="${option}">${option}</label>
  //       `;
  //       })
  //       .join("")}
  //     </div>
  //   `;

  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement("input");
    optionElement.type = "radio";
    optionElement.name = "option";
    optionElement.value = option;
    container.appendChild(optionElement);

    const labelElement = document.createElement("label");
    labelElement.textContent = option;
    labelElement.htmlFor = option;
    container.appendChild(labelElement);
  });
};

submitBtn.addEventListener("click", () => {
  const correctAnswer = questions[questionIndex].answer;
  const selectedAnswer = document.querySelector(
    "input[type='radio']:checked"
  ).value;
  if (correctAnswer === selectedAnswer) {
    scoreValue++;
  }
  score.textContent = `Score: ${scoreValue}`;
  questionIndex++;

  if (questionIndex < questions.length) {
    renderQuestion();
  } else {
    submitBtn.disabled = true;
    container.innerHTML = "<h2>You have completed the quiz</h2>";
  }
});

renderQuestion();
