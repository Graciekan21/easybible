//got some help with Js to funtion well by Fredrick Sanhewe 

window.onload = function () {
    let questions = document.querySelectorAll(".question");//collect all questions and their answers
    let totalQuestions = questions.length;
    let totalScore = 0;
    //loop through each question card
    for (let i = 0; i < questions.length; i++) {
        let myQ = questions[i];
        //collect all answers under question on index i
        let myAnswers = myQ.querySelectorAll("input[type='radio']");
        //loop through each answer for the selected question
        for (let j = 0; j < myAnswers.length; j++) {
            let myAns = myAnswers[j];
            //add a click listener to the parent element of input the tag
            myAns.parentNode.addEventListener("click", function () {
                myAns.click();
            });
            //add a click listener to the answer element only
            myAns.addEventListener("click", function () {
                //check if its the correct answer
                let correct = (myAns.hasAttribute("data-correct") && myAns.getAttribute("data-correct"));
                if (correct) {
                    //correct answer
                    totalScore++;
                } else {
                    //incorrect answer
                }
            });
        }
    }
};