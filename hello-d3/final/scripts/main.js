
// make sure we've loaded d3 properly, check out all the functions inside
console.log(d3);

////////////////////
/////SELECTIONS/////
////////////////////

/* you can select things individually */

var p1 = d3.select("#p1");
p1.style("font-size","22px").style("padding","20px").attr("class","blue-selection");

/* select all of the divs with class "selections" and change the font color*/
var allP = d3.selectAll(".selections");
allP.style("color","white").style("background","navy");

/* add an inner paragraph with append */
allP.append("p")
		.attr("class","inner-paragraph")
		.text("Our new paragraph");

/* our first SVG! */
var svg = d3.select('#svg').append('svg')
		.attr('width','500')
		.attr('height','500');

/* our first shape*/
	svg.append('circle') 
		.attr('cx', '250') // the x coordinate position for the circle center
		.attr('cy', '250') // the y coordinate position for the circle center
		.attr('r','100') // the radius of the circle
		.style('fill','blue') // svg elements use "fill" and "stroke" instead of background color, color or border

/* what about a rectangle? */
	svg.append('rect')
		.attr('x', '250') // the x coordinate position of the top left corner of the rectangle
		.attr('y', '250') // the y coordinate position of the top left corner of the rectangle
		.attr('width','150') // the width
		.attr('height','75') // the height
		.style('fill','red');


////////////////////
/////DATA JOINS/////
////////////////////

/* some test data */
var circleData = [75,100,230,415];

/* lets add some circles with this data */
var circles = svg.selectAll('.data-circle') 
		.data(circleData).enter()
		.append('circle').attr('class','data-circle')
			.attr('cx', function(d){
				return d
			})
			.attr('cy','30')
			.attr('r','20')


////////////////////
///////SCALES///////
////////////////////

var svgWidth = 300;
var svgHeight = 150;

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
		"Age": 4,
		"Color": "brown",
	},
];

var petSVG = d3.select('#pets-svg').append('svg')
	.attr('width',svgWidth)
	.attr('height',svgHeight);

var ageScale = d3.scaleLinear()
	.domain([
		0, d3.max(pets, function(d){ return d.Age })
	]) // set the domain from zero (youngest possible pet age) to the max Age value in our data set (one of many nice d3 array manipulation methods)
    .range([0, svgWidth]); // this is the _range_ we want to align our data to. let's make it the width of our SVG so we can make bars

var petScale = d3.scaleBand()
	.domain(pets.map(function(d) { return d.Name; })) 
	.paddingInner(0.1)
    .paddingOuter(0.5)
	.range([0, svgHeight], .1); //setting range from 0 to our svgHeight. scaleBand() scales are good for positioning bars

var bars = petSVG.selectAll('.pet-bar')
	.data(pets).enter()
	.append('rect').attr('class','pet-bar')
	.attr('x','0') // our X coordinate for each bar will be 0, because the top left of our rectangle needs to be all the way to the left
	.attr('y', function(d){
		return petScale(d.Name) //we pass in our pet's name to the petScale to get its y position
	})
	.attr('height', petScale.bandwidth() ) // scaleBand comes with a nice bandWith() method for creating bars
	.attr('width', function(d){
		return ageScale(d.Age) //we pass in our pet's age to the ageScale to see how wide the bar should be
	});




///////////////////////////////////////////////////////////////
/////IF WE GET TO THIS, D3 AXIS FX, VERTICAL BARS AND MORE!/////
///////////////////////////////////////////////////////////////

var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];

var chartWidth = 400;
var chartHeight = 200;



