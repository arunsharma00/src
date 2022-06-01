// Function for calculating grades
const calculate = () => {

// Getting input from user into height variable.
let english = document.querySelector("#english").value;
let hindi = document.querySelector("#hindi").value;
let maths = document.querySelector("#maths").value;
let science = document.querySelector("#science").value;
let grades = "";

// Input is string so typecasting is necessary. */
let totalgrades =
	parseFloat(english) +
	parseFloat(hindi) +
	parseFloat(maths) +
	parseFloat(science);

// Checking the condition for the providing the
// grade to student based on percentage
let percentage = (totalgrades / 400) * 100;
if (percentage <= 100 && percentage >= 80) {
	grades = "A";
} else if (percentage <= 79 && percentage >= 60) {
	grades = "B";
} else if (percentage <= 59 && percentage >= 40) {
	grades = "C";
} else {
	grades = "F";
}
// Checking the values are empty if empty than
// show please fill them
if (english == "" || hindi == ""
			|| maths == "" || science == "") {
	document.querySelector("#showdata").innerHTML
		= "Please enter all the fields";
} else {

	// Checking the condition for the fail and pass
	if (percentage >= 39.5) {
	document.querySelector(
		"#showdata"
	).innerHTML =
		` Total Marks = 400 .
    <br>
    You Scored = ${totalgrades} .
    <br>
		Your Percentage = ${percentage}%. \       <br>
		Your Grade = ${grades}. 
    <br>
    <b> <span style="color:green"> <b> You are Pass. </span> </b> `;
	} else {
	document.querySelector(
		"#showdata"
	).innerHTML =
		` Total Marks = 400.
    <br>
    You Scored = ${totalgrades}.
    <br>
		Your Percentage = ${percentage}%. \       <br>
		Your Grade = ${grades}. 
    <br>
    <b> <span style="color:red"> You are Fail.</span> </b> `;
	}
}
};
