var userAnswer = "";
var totalCorrect = 0;

var questionOne = {
  question: "What is the Nebraska state motto?", 
  answers: [ "Cows forever",  "Go Huskers!", "The good life", "Corn country" ],
  correct: "The good life"
}

var questionTwo = {
  question: "What is the Nebraska state flower?", 
  answers: [ "Goldenrod", "Lily", "Corn", "Bluegrass"],
  correct: "Goldenrod"
}

var questionThree = {
  question: "What is the capital of Nebraska?", 
  answers: [ "Scotts Bluff", "Lincoln", "Omaha", "Grand Island" ],
  correct: "Lincoln"
}

var questionFour = {
  question: "What is the Nebraska state bird?", 
  answers: [ "Whooping Crane", "Bluebird", "Meadowlark", "Loon" ],
  correct: "Meadowlark"
}

var questionFive = {
  question: "Who is the Governor of Nebraska?", 
  answers: [ "Willa Cather", "Louis L'Amour", "Herbie Husker", "Pete Ricketts" ],
  correct: "Pete Ricketts"
}


question_list = [questionOne, questionTwo, questionThree, questionFour, questionFive ]

var questions = question_list;

function listAnswer(){for (var i = 0; i <= 4; i++);
  { question.answers[i] + "\n" }
}

while (questions.length > 0){
  var question = questions.pop();
  var userAnswer = prompt(question.question + "\nChoices: " + question.answers);
  if (userAnswer == question.correct){
    totalCorrect++;
    alert("Correct!");
  }
  else {
    alert("Incorrect!");
  }}
alert("You got" + totalCorrect + "correct")







