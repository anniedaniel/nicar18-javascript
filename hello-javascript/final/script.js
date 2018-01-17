// Looks for an element with an ID of `hello` and appends `Table of pets`
document.getElementById('hello').innerHTML = 'Table of pets';

// A JSON variable with pet objects
var pets = [
	{
		"Name": "Princess Mia",
		"Type": "cat",
		"Age": 3,
		"Color": "orange",
	},
	{
		"Name": "Willy",
		"Type": "cat",
		"Age": 6,
		"Color": "grey",
	},
	{
		"Name": "Sophie",
		"Type": "dog",
		"Age": 6,
		"Color": "brown",
	},

]

//  Grabs the table element in the index file
table = document.getElementById('pet-table')

//  This loops through each pet object and appends a table row to our table that we created above
pets.forEach(function(obj) { 
	var tr = table.insertRow(-1);
	// Then we loop through the attributes in each object and create a new table cell for the data
	for(i in obj){
		// This creates the table cell. The `-1` at the end is just a JavaScript thing that tells 
		// the `insertCell` to stick any new cells after the previous one intead of before or above.
		var tableCell = tr.insertCell(-1);
		// Finally we add the data to the table cell and voila, a table of pets.
		tableCell.innerHTML = obj[i];
	}
});