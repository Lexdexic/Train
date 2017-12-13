// todo
$(document).ready(function(){
	// creat var for train name, destination trainTime, frequency.
	var trainName;
	var destination;
	var trainTime;
	var frequency;

	$("#add-train").on("click", function()
	{

		trainName = $("#name-input").val();
		destination = $("#destination-input").val();
		trainTime = $("#trainTime-input").val();
		frequency = $("#frequency-input").val();
		displayInfo();
		console.log("crap");
		return false;

	});
	
	// create function to calculate time untill arrival relative to current time (moment.js)
	function calculateArrivalTime()
	{
	//current time + frequency = next arrival (use moment.js) 

	}
	function getMinAway(arivalTime)
	{
	// get current time subtract train arrival time
	}
	function displayInfo()
	{
		var row = "<tr>";
		var tdName = "<td>" + trainName + "</td>";
		var tdDestination = "<td>" + destination + "</td>";
		var tdTime = "<td>" + trainTime + "</td>";
		var tdFrequency = "<td>" + frequency + "</td></tr>";


		$("#trainTable").append(row + tdName + tdDestination + tdTime + tdFrequency);

	}
	//make a function to  get info from firebase  
	function getFirebaseInfo()
	{

	}

	function addNewTrain()
	{
		//use global var to add data to firebase
	}
	// use firebase to store and access data

	// BONUS uppdate min away every min
	// 	update and remove buttons for each train
});