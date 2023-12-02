//got help with Js by Fredrick Sanhewe 

window.onload = function () {
    var correct_marks = 0;
    var total_questions = 0;
    var total_attempts = 0;
    let inputs = document.querySelectorAll("input[type='radio']");
    total_questions = inputs.length / 4;

    for (let y = 0; y < inputs.length; y++) {
        let q_answers = document.getElementsByName(inputs[y].name);
        for (let i = 0; i < q_answers.length; i++) {
            q_answers[i].addEventListener("change", function () {
                var q_answers2 = document.getElementsByName(inputs[y].name);

                for (let x = 0; x < q_answers.length; x++) {
                    q_answers[x].disabled = true;
                }
                for (let x = 0; x < q_answers.length; x++) {
                    let correct_answer = q_answers[x].hasAttribute("data-correct");
                    if (correct_answer == true) {
                        //execute when true
                        total_attempts++;
                     //mark the correct answer with green
                        q_answers[x].parentNode.style.backgroundColor = "green";
                        if (q_answers[x].checked) {
                            correct_marks++;
                            document.getElementById('points').innerHTML = (correct_marks / 4) + "/" + total_questions;
                            //user picked the correct answer
                        } else {
                            //Incorrect answer picked
                        }
                    } else {
                        if (q_answers[x].checked) {
                            //mark the wrong answer with red
                            q_answers[x].parentNode.style.backgroundColor = "red";
                        }
                    }
                }
                showMarks();
                //check if its the end
            });
        }
    }
    async function showMarks() {
        //always divide by 4 for every repeated increment
        if (total_attempts / 4 >= 1/*total_questions*/) {
            //wait 1 second before popup
            setTimeout(function () { Swal.fire({
                title: "Total Marks",
                text: "You got " + (correct_marks / 4) + "/" + total_questions,
                icon: "success"
                });
                }, 1000);
        }
    }
};