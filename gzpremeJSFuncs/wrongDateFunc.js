function checkDate() {
	// GETS THE CURRENT YEAR & INPUT VALUE
	var currYear = new Date().getFullYear(); 
	var currMonth = new Date().getMonth();

	var inputYear = document.getElementById("year").value;
	var seasons = document.getElementsByName("season");

	var output = "";

	document.getElementById("errorYear").innerHTML = "";
	document.getElementById("errorSeason").innerHTML = "";

	if( inputYear == "" || inputYear == 0 ) {
		return false;
	}
	// IF THE YEAR IS PAST THE CURRENT YEAR
	else if (inputYear > currYear) {
    	output = "It's not " +inputYear+ " yet!";
    	document.getElementById("errorYear").innerHTML = output.italics();
    } 
    // IF THE YEAR IS BEFORE 2016
    else if(inputYear < 2016) {
    	output = "Sorry, we have no information about the drops before 2016.";
    	document.getElementById("errorYear").innerHTML = output.italics();
    }
    
    else {

	    // IF THE CURRENT MONTH IS JANUARY, THE SS SEASON HASN'T STARTED YET 
	    if (currMonth < 1) { 
	    	output = "The " +inputYear+ " " +document.querySelector('input[name = "season"]:checked').value+ " season hasn't started yet!"
	    	document.getElementById("errorSeason").innerHTML = output.italics();
	    } 
	    // IF THE CURRENT MONTH IS BEFORE AUGUST, THE FW SEASON HASN'T STARTED YET 
	    else if (currMonth < 8 && document.getElementById('FW').checked && inputYear == currYear) {
	    	output = "The " +inputYear+ " " +seasons[1].value+ " season hasn't started yet!"
	    	document.getElementById("errorSeason").innerHTML = output.italics();
	    } 
	    // GO TO THE INSTAGRAM PAGE 
	    else { 
	    	var yearVal = inputYear%2000;
	    	var seasonVal = document.querySelector('input[name = "season"]:checked').value;
	    	window.location.href = "https://www.instagram.com/explore/tags/gzpreme_drops_" + seasonVal + yearVal;
	    }
    }
}