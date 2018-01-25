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

var plants = [
	{
		"Name": "Cyclamen",
		"Type": "flower",
		"Description": "Pink, downward-facing flowers",
	},
	{
		"Name": "Jalepeno",
		"Type": "pepper",
		"Color": "Long, green peppers",
	},
	{
		"Name": "Haworthia",
		"Type": "succulent",
		"Color": "Dark green, spiky succulent with white stripes",
	},

]


function tableMaker(id, data) {
	//  Grabs whichever table element in the index.html we specify with id
	table = document.getElementById(id)

	//  This loops through each object of whatever dataset we named with data and appends a table row
	//  to our table that we created above
	data.forEach(function(obj) { 
		var tableRow = table.insertRow(-1);
		// Then we loop through the attributes in each object and create a new table cell for the data
		for(i in obj){
			// This creates the table cell. The `-1` at the end is just a JavaScript thing that tells 
			// the `insertCell` to stick any new cells after the previous one intead of before or above.
			var tableCell = tableRow.insertCell(-1);
			// Finally, we add the data to the table cell and voila, a table of our data.
			tableCell.innerHTML = obj[i];
		}
	});
}

// Calls our tableMaker function for pets, then for plants
tableMaker('pet-table', pets);
tableMaker('plant-table', plants);