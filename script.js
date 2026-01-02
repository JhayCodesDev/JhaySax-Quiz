"use strict";

const questions = [
  {
    question: "In what year were let and const introduced in JavaScript(ES6)?",
    answer: "2015",
    type: "string",
  },
  {
    question:
      "I am a number. Double me and add 10, i become 30. What number am i?",
    answer: 10,
    type: "number",
  },
  {
    question: "What famous ship sank after hitting an icebarg in 1912?",
    answer: "Titanic",
    type: "string",
  },
  {
    question:
      "If you have 20 apples and give away 7, how many do you have left?",
    answer: 13,
    type: "number",
  },
  {
    question: "who created the royal bank ?",
    answer: "John Law",
    type: "string",
  },
  {
    question:
      "If you buy 3 pencils at $2 each and pay with a $10 note, how much change do you get?",
    answer: "$4",
    type: "string",
  },
  {
    question: "who is the founder of space x ?",
    answer: "Elon Musk",
    type: "string",
  },
  {
    question: "what is the square root of 16 ?",
    answer: 4,
    type: "number",
  },
  {
    question: "what is the square of 16 ?",
    answer: 256,
    type: "number",
  },
  {
    question: "who is the chief economist of the classical economist ?",
    answer: "Adam Smith",
    type: "string",
  },
];

let score = 0;
const displayQuiz = function () {
  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    let userInput = prompt(q.question);
    if (q.type === "number") {
      let num = Number(userInput);
      if (!isNaN(num) && num === q.answer) {
        document.getElementById("demo").innerHTML =
          "correct Answer ✅ one coke dey for you!!! 😉";
        score++;
      } else {
        document.getElementById("demo").innerHTML =
          "Wrong answer ❌ coke no dey for you oooo 😂😂😂";
      }
    } else if (q.type === "string") {
      if (userInput === q.answer) {
        document.getElementById("demo").innerHTML =
          "correct Answer ✅ one coke dey for you!!! 😉";
        score++;
      } else {
        document.getElementById("demo").innerHTML =
          "Wrong answer ❌ coke no dey for you oooo 😂😂😂";
      }
    }
  }
  if (score <= 4) {
    document.getElementById(
      "demo"
    ).innerHTML = `you scored ${score} out of ${questions.length} that's bad 👎 Coke no dey for you 😂😂😂`;
  } else if (score > 5 && score <= 7) {
    document.getElementById(
      "demo"
    ).innerHTML = `you scored ${score} out of ${questions.length} you tried Coke dey for you buh na small ooo 😂😂😂`;
  } else if (score >= 8 && score === 10) {
    document.getElementById(
      "demo"
    ).innerHTML = `you scored ${score} out of ${questions.length} you be agba 🙌🙌 Coke dey for you 💯`;
  }
};
