function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;

	if (question1 == "manchester united") {
		correct++;
	}

	if (question2 == "old trafford") {
		correct++;
	}

	if (question3 == "20") {
		correct++;
	}

	if (question4 == "3") {
		correct++;
	}

	if (question5 == "4") {
		correct++;
	}

	if (question6 == "0") {
		correct++;
	}

	if (question7 == "20") {
		correct++;
	}

	if (question8 == "75811") {
		correct++;
	}

	if (question9 == "MUFC") {
		correct++;
	}

	if (question10 == "manchester city") {
		correct++;
	}

	document.getElementById("after_submit").style.visibility ="visible";

	document.getElementById("number_correct").innerHTML = "Ditt resultat, " + correct + " rätta svar.";


}