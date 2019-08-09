var formField = document.querySelectorAll(".form-block .form-block--form-card .form-block__form-field")
var username = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm = document.getElementById("confirm");
var btnSubmit = document.getElementById("submit");
var formRemove = document.querySelector(".form-block ");
var examBlock = document.querySelector(".questions-block ");
var questionBlock = document.getElementById("questionss");
var skippblock = document.querySelector(".skip-block");
var flage = false;
var btnNext, btnSkip, questionIndex = 0, skipIndex = 0, answerIndex = 0; final_result = 0;
var questionResult = [], skipsArr = [], arrofAnswers = [];

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function nameValidation() {
    var flage = false;
    if (username.value === null || username.value === "" || username.value.length < 8 || !/[A-Za-z ]+$/.test(username.value)) {
        document.getElementById("error-name").textContent = "Invalid username";
        flage = false;
    }
    else {
        document.getElementById("error-name").textContent = "";
        flage = true;
    }
    return flage;
}
function emailValidation() {
    var flage = false;
    if (validateEmail(email.value)) { //true
        console.log("fghjk")
        document.getElementById("error-email").textContent = "";
        flage = true;
    }
    else {
        console.log("jjjjjj")
        document.getElementById("error-email").textContent = "Invalid email ";
        flage = false;
    }
    return flage;

}
function passwordValidation() {
    var flage = false;
    if (password.value === null || password.value === "" || password.value.length < 8) {
        document.getElementById("error-pass").textContent = "Invalid password";
        flage = false;
    }
    else {
        document.getElementById("error-pass").textContent = "";
        flage = true
    }
    return flage;
}
function confirmValidation() {
    var flage = false;
    if (confirm.value === null || confirm.value === "" || confirm.value !== password.value) {
        document.getElementById("error-confirm").textContent = "Wrong password";
        flage = false;
    }
    else {
        document.getElementById("error-confirm").textContent = "";
        flage = true;
    }
    return flage;
}
username.addEventListener("keyup", function () {
    nameValidation();
});
email.addEventListener("keyup", function () {
    emailValidation();
});
password.addEventListener("keyup", function () {
    passwordValidation();
});
confirm.addEventListener("keyup", function () {

    confirmValidation();


});
btnSubmit.addEventListener("click", function () {

      if(nameValidation()==true && emailValidation()==true && passwordValidation()==true && confirmValidation()==true)
      {
    formRemove.classList.add("active");
    examBlock.classList.remove("active");
    skippblock.classList.remove("active")
    formRemove.classList.add("questions-block");
      }   

});

function Questions(Q, ANS1, ANS2, ANS3, ANS4, RightAns) {

    this.Q = Q;
    this.ANS1 = ANS1;
    this.ANS2 = ANS2;
    this.ANS3 = ANS3;
    this.ANS4 = ANS4;
    this.RightAns = RightAns;
}

var qust1 = new Questions("How many colors are there in a rainbow?", "7", "6", "8", "3", "7");
var qust2 = new Questions("What is a baby frog called?", "Cheep", "Puppy", "Tadpole", "Turtle", "Tadpole");
var qust3 = new Questions(" Where does a pig live?", "Stie", "Sty", "Ocean", "Newyork", "Sty");
var qust4 = new Questions("How do you relate to your maternal grandfather?", "Mother", "Grandfather", "Mother’s father", "Dad", "Mother’s father");
var qust5 = new Questions("Trout, carp and, barracuda are names of what?", "Mammals", "Animals", "Dogs", "Fish", "Fish");
var qust6 = new Questions("Which planet is known as the Red Planet?", "Jupiter", "Venus", "Mars", "Saturn", "Mars");
var qust7 = new Questions("Which is the largest plateau in the world?", "Tibetan", "Nitab", "Tiee ", "Sat ", "Tibetan");
var qust8 = new Questions("What is the next number in the following sequence– 7, 14, 21, 28?", "35", "40", "34", "39", "35");
var qust9 = new Questions("What makes up (approx.) 80% of our brain’s volume?", "Water", "Air", "Gas", "Fluids", "Water")
var qust10 = new Questions("Which country does volleyball originate from?", "France", "Brazil", "USA", "Greecs", "USA");
var modelAns = ["7", "Tadpole", "Sty", "Mother’s father", "Fish", "Mars", "Tibetan", "35", "Water", "USA"];
var arrOfQuestions = [qust1, qust2, qust2, qust4, qust5, qust6, qust7, qust8, qust9, qust10];
// qust1.Q1="what is your name !?"; 
// console.log(qust1)
// question.textContent=qust1.Q1;
function GetRandomQuestions() {
    for (var i = 0; i < arrOfQuestions.length; i++) {
        var randomItems = arrOfQuestions[Math.floor(Math.random() * arrOfQuestions.length)];
        if (questionResult.indexOf(randomItems) == -1 && questionResult.length < 5) {
            questionResult.unshift(randomItems);
        }
    }
    return questionResult;
}
console.log(GetRandomQuestions())

function createRadioButton(radioid, lableid,answer ) {
    var radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('id', radioid);
    radio.setAttribute('name', 'answers')
    // radio.textContent=answer;
    var lable = document.createElement('label');
    lable.setAttribute('id', lableid)
    lable.textContent = answer;
    questionBlock.appendChild(radio);
    questionBlock.appendChild(lable)
}
function createQuestion(questtion) {
    var questionInHtml = document.createElement('h1');
    questionInHtml.setAttribute('id', 'question1');
    questionInHtml.textContent = questtion;
    questionBlock.appendChild(questionInHtml);

}
function createButton(btn, id, namee) {
    btn = document.createElement('a');
    btn.setAttribute('href', '#');
    btn.setAttribute('class', 'btn--font btn--rounded btn--primary form-block--submit submitdecoration');
    btn.setAttribute('id', id)
    btn.textContent = namee;
    examBlock.append(btn);
}
function addQuestionsToHtml(qustion) {
    createQuestion(qustion.Q)
    createRadioButton('radio1', "lable1", qustion.ANS1);
    createRadioButton('radio2', "lable2", qustion.ANS2);
    createRadioButton('radio3', "lable3", qustion.ANS3);
    createRadioButton('radio4', "lable4", qustion.ANS4);
}
function createSkipQuestion(Qindex, Qname) { 
    var skipquestion = document.createElement('a');
    skipquestion.setAttribute('href', '#');
    skipquestion.setAttribute('class', 'btn--font btn--rounded btn--primary form-block--submit skip-question');
    skipquestion.setAttribute('id', Qindex)
    skipquestion.textContent = Qname;
    skippblock.appendChild(skipquestion);

    skipquestion.addEventListener("click", function () {

        //  alert("are u sure u skip this question without answer");
        flage = true;
        var removeQuestion = document.getElementsByClassName("skip-question");
        console.log(removeQuestion)
        answerIndex = removeQuestion[0].id;
        questionBlock.innerHTML = " ";
        addQuestionsToHtml(randomQs[Qindex]);
        skipquestion.parentNode.removeChild(skipquestion);
        skipIndex++;
        calcAnswers();

    });
}
function nextQuestion() {
   
    //debugger;
    if (questionIndex < randomQs.length - 1) {
        if (flage == true) {
            flage = false
            answerIndex = questionIndex;
        }
        else {

            questionIndex++;
            answerIndex = questionIndex;
            console.log("answer index" + answerIndex)

        }
        questionBlock.innerHTML = " ";
        addQuestionsToHtml(randomQs[questionIndex]);
        calcAnswers();
    }
    else if (skipsArr.length > 0) {
        var removeQuestion = document.getElementsByClassName("skip-question");

        if (removeQuestion.length != 0) {
            //  debugger
            questionBlock.innerHTML = " ";
            addQuestionsToHtml(skipsArr[skipIndex]);
            answerIndex = removeQuestion[0].id;
            removeQuestion[0].remove();
            skipIndex++;
            calcAnswers();

        }

        else {
            examBlock.innerHTML = " ";
            calcFinalResult();
            setFinalResult(final_result);
            skippblock.classList.add("active");
            examBlock.classList.add("finalresultcenter");
        }
    }

    else {
        examBlock.innerHTML = " ";
        calcFinalResult();
        setFinalResult(final_result);
        skippblock.classList.add("active");
        examBlock.classList.add("finalresultcenter");

    }
}
function skipQuestion() {

    if (questionIndex < randomQs.length - 1) {
        createSkipQuestion(questionIndex, randomQs[questionIndex].Q);
        skipsArr.push(randomQs[questionIndex]);
        questionIndex++;
        answerIndex = questionIndex;
        questionBlock.innerHTML = " ";
        addQuestionsToHtml(randomQs[questionIndex]);
    }
    if (questionIndex == randomQs.length - 1) {
        alert("you can't skip the last question");
    }
    calcAnswers();
}
function calcAnswers() {

    var label1 = document.getElementById("radio1");
    var label2 = document.getElementById("radio2");
    var label3 = document.getElementById("radio3");
    var label4 = document.getElementById("radio4");
    console.log(questionIndex);

    label1.addEventListener("click", function () {

        arrofAnswers[answerIndex] = randomQs[answerIndex].ANS1;
        console.log(arrofAnswers);
    });
    label2.addEventListener("click", function () {

        arrofAnswers[answerIndex] = randomQs[answerIndex].ANS2;
        console.log(arrofAnswers);
    });
    label3.addEventListener("click", function () {

        arrofAnswers[answerIndex] = randomQs[answerIndex].ANS3;
        console.log(arrofAnswers);
    });
    label4.addEventListener("click", function () {

        arrofAnswers[answerIndex] = randomQs[answerIndex].ANS4;
        console.log(arrofAnswers);
    });
}
function calcFinalResult() {
    // debugger
    for (var i = 0; i < randomQs.length; i++) {
        if (arrofAnswers[i] == randomQs[i].RightAns) {
            //    console.log(arrofAnswers[questionIndex])
            final_result++;
        }
    }
}
function setFinalResult(result) {
    var congratilation = document.createElement('h1');
    congratilation.setAttribute('id', 'congrat');
    congratilation.textContent = "Congratulations ";
    examBlock.appendChild(congratilation);

    var score = document.createElement('h3');
    score.setAttribute('id', 'congrat')
    examBlock.appendChild(score);
    score.textContent = "Your Score is";

    var finalScore = document.createElement('span');
    finalScore.setAttribute('id', 'finalscore');
    finalScore.setAttribute('class', 'score');

    finalScore.textContent = result;
    examBlock.appendChild(finalScore);
}
createButton(btnNext, "next", "Next");
createButton(btnSkip, "skip", "Skip");
var btnnxt = document.getElementById("next");
var btnskip = document.getElementById("skip");
var randomQs = GetRandomQuestions();

addQuestionsToHtml(randomQs[questionIndex]);
calcAnswers();

btnnxt.addEventListener("click", function () {
    nextQuestion();
});

btnskip.addEventListener("click", function () {
    skipQuestion();

});
