const DOMAIN_NAMES = {
  1: "Domain 1 — General Security Concepts",
  2: "Domain 2 — Threats, Vulnerabilities and Mitigations",
  3: "Domain 3 — Security Architecture",
  4: "Domain 4 — Security Operations",
  5: "Domain 5 — Program Management and Oversight"
};

const LETTERS = ["A", "B", "C", "D"];

let currentIndex = 0;
let score = 0;
let answered = false;
let wrongAnswers = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const progressFill = document.getElementById("progress-fill");
const domainLabel = document.getElementById("domain-label");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const explanationDiv = document.getElementById("explanation");
const nextBtn = document.getElementById("next-btn");

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  wrongAnswers = [];
  startScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = QUESTIONS[currentIndex];
  questionCounter.textContent = "Question " + q.id + " of 90";
  scoreDisplay.textContent = "Score: " + score;
  progressFill.style.width = ((currentIndex) / QUESTIONS.length * 100) + "%";
  domainLabel.textContent = DOMAIN_NAMES[q.domain] || ("Domain " + q.domain);
  questionText.textContent = q.question;
  explanationDiv.classList.add("hidden");
  explanationDiv.textContent = "";
  nextBtn.classList.add("hidden");
  nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? "See results" : "Next";

  optionsDiv.innerHTML = "";
  q.options.forEach(function (option, index) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = LETTERS[index] + ".";
    const text = document.createElement("span");
    text.textContent = option;
    btn.appendChild(letter);
    btn.appendChild(text);
    btn.addEventListener("click", function () { selectAnswer(index, btn); });
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selectedIndex, selectedBtn) {
  if (answered) return;
  answered = true;
  const q = QUESTIONS[currentIndex];
  const buttons = optionsDiv.querySelectorAll(".option-btn");
  buttons.forEach(function (btn) { btn.disabled = true; });

  if (selectedIndex === q.correct) {
    score++;
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
    buttons[q.correct].classList.add("correct");
    wrongAnswers.push({
      id: q.id,
      domain: q.domain,
      question: q.question,
      correctIndex: q.correct,
      correctText: q.options[q.correct],
      explanation: q.explanation
    });
  }

  scoreDisplay.textContent = "Score: " + score;

  const title = document.createElement("strong");
  title.textContent = selectedIndex === q.correct ? "Correct!" : "Incorrect — the correct answer is " + LETTERS[q.correct] + ".";
  const body = document.createElement("div");
  body.textContent = q.explanation;
  explanationDiv.appendChild(title);
  explanationDiv.appendChild(body);
  explanationDiv.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  const total = QUESTIONS.length;
  const percent = Math.round((score / total) * 100);
  document.getElementById("final-score").textContent = score + " / " + total;
  document.getElementById("final-percent").textContent = percent + "% correct";
  document.getElementById("pass-message").textContent =
    score >= 72
      ? "Around pass level or above (72+ is around pass level). Well done — keep reviewing your wrong answers."
      : "Below pass level (72+ is around pass level). Review the questions below and try again.";

  const breakdownDiv = document.getElementById("domain-breakdown");
  breakdownDiv.innerHTML = "";
  [1, 2, 3, 4, 5].forEach(function (domain) {
    const domainQs = QUESTIONS.filter(function (q) { return q.domain === domain; });
    const wrongInDomain = wrongAnswers.filter(function (w) { return w.domain === domain; }).length;
    const correctInDomain = domainQs.length - wrongInDomain;
    const p = document.createElement("p");
    p.textContent = DOMAIN_NAMES[domain] + ": " + correctInDomain + " / " + domainQs.length;
    breakdownDiv.appendChild(p);
  });

  const wrongList = document.getElementById("wrong-list");
  wrongList.innerHTML = "";
  if (wrongAnswers.length === 0) {
    const p = document.createElement("p");
    p.textContent = "Perfect — no questions to review.";
    wrongList.appendChild(p);
  } else {
    wrongAnswers.forEach(function (w) {
      const item = document.createElement("div");
      item.className = "wrong-item";
      const qEl = document.createElement("p");
      qEl.textContent = "Q" + w.id + ": " + w.question;
      const aEl = document.createElement("p");
      aEl.className = "correct-answer";
      aEl.textContent = "Correct answer: " + LETTERS[w.correctIndex] + ". " + w.correctText;
      const eEl = document.createElement("p");
      eEl.textContent = w.explanation;
      item.appendChild(qEl);
      item.appendChild(aEl);
      item.appendChild(eEl);
      wrongList.appendChild(item);
    });
  }
}
