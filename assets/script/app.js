//got some help with Js to funtion well by Fredrick Sanhewe 

window.onload = function () {
    let questions = document.querySelectorAll(".question");//collect all questions and their answers
    let totalQuestions = questions.length;
    let totalScore = 0;
    let attempted= 0;
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
                attempted++;
                for (let x = 0; x < myAnswers.length; x++) {
                    myAnswers[x].disabled = true;
                }
                if (correct) {
                    //correct answer
                    totalScore++;
                    myAns.parentNode.style.backgroundColor = 'green';
                } else {
                    //incorrect answer, highlight red
                    myAns.parentNode.style.backgroundColor = 'red';
                    for (let y = 0; y < myAnswers.length; y++) {
                        let correctAns = (myAnswers[y].hasAttribute("data-correct") && myAnswers[y].getAttribute("data-correct"));
                        //check if its the correct answer and highlt to green
                        if (correctAns) {
                            myAnswers[y].parentElement.style.backgroundColor = 'green';
                        }
                    }
                    
                }
                //update correct marks counts
                document.getElementById('points').innerHTML=totalScore ;
                //check if completed all the question
                if (attempted==totalQuestions) {
                    showMarks();
                }
                
            });
            async function showMarks() {
                //for showing marks after finishing all questions
                if (attempted==totalQuestions) {
                    //wait 1 second before popup
                    setTimeout(function () { 
                        Swal.fire({
                            title: "Total Marks",
                            text: "You got " + (totalScore ) + "/" + totalQuestions,
                            icon: "success"
                        });
                    }, 500);
                }
            }
        }
    }
};