# Hello, D3!

## What the heck is D3?

**D3** stands for **D**ata-**D**riven **D**ocuments. It's a Javascript library used to manipulate the DOM ([which we learned about earlier](https://github.com/anniedaniel/nicar18-javascript/blob/master/hello-javascript/hello-javascript.md)). From the website:
> D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS
>D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.

TL;DR – D3.js uses data to make things on the web, specifically using HTML, CSS, SVG and Javascript to make that happen.

**IMPORTANT: D3 is NOT a chart library**
- It _can_ be used as a data and visualization library
- It _can_ help you make charts, but its main goal is to utilize web technologies that already exist (HTML, CSS, SVG) in order to process and bind data to documents

Read the docs and more [here](https://d3js.org/)!

**Side note: What is SVG?** SVG stands for Scalable Vector Graphics. SVG defines vector-based graphics for the web using point coordinates in XML code. SVG is what D3 uses to create and manipulate unique shapes and graphics on the web. Read more about SVG [here](https://www.w3schools.com/graphics/svg_intro.asp).

#### Before we get started: The set up

First, take a look at the `class-files` folder. The file structure will be similar to the file structure used in the intro to js class, but instead of just having a `script.js` class, we have a `scripts` folder. If you open up that folder, you'll see a `main.js` file, which is where we'll write all of our code, and a `d3.min.js` file which is a minimized version of the D3.js library.

If you look at the `index.html` file in your text editor, you'll see that we're referencing the `d3.min.js` file just above the `main.js` just before the end of the HTML `</body>`. This is so we can use the D3 methods in our own code!

## Let's write some code!

Hop into the `main.js` file in your text editor. Before we get going, let's take a look at everything D3 gives us by logging the `d3` object.

	console.log(d3)

If you go to the console in your browser, like we did in the last class, you can see see the `d3` object. If you open it up and take a look, you can see all the different methods available with d3. We're only going to look at a select few today, but you explore all of the available methods in the [API documentation](https://github.com/d3/d3/blob/master/API.md).

### THE BASICS

#### Selections

**Selections** are how D3 interacts with the DOM.

Take a look inside the `index.html` file and you'll find a group of divs with the class `.selections`. Let's use D3 to manipulate these divs. You should also open up your `index.html` file in your web browser so you can see what it looks like right now.

In the last class, we looked at how you can interact with DOM elements using javascript. If we wanted to select the second `.selections` div, with the ID `#p1`, we would write something like this:

	// USING JAVASCRIPT
	document.getElementById("p1");

D3 has its own shorthand for selecting DOM elements – they're called **selections**!

Navigate to your `scripts/` directory and open up the `main.js` file in your text editor. Add this line to select the `#p1` div using D3 selections.

	d3.select("#p1");

While we're at it, let's assign this to a variable so we can reference it later on (remember variables from last class?). Now, let's use D3 selections to change a CSS attribute.

	var p1 = d3.select("#p1");
	p1.style("font-size","22px");

All of these D3 methods are chainable. So, if we wanted to change more than one style:

	var p1 = d3.select("#p1");
	p1.style("font-size","22px").style("padding","20px");

D3 selections also work for selecting more than one object at a time. You can do this with the `.selectAll()` method. Let's add another selection to our code, and alter the styles of all the `.selections` divs:

	var allP = d3.selectAll(".selections");
	allP.style("color","white").style("background","darkcyan");

Styles aren't the only things we can change. We can also change the attributes associated with DOM elements. Let's drop the `.selections` class from `p1` and give it a different class – `.blue-selection`. If you look at your CSS file, you'll see a class already established in there with a few different style attributes already defined. **Make sure you add this attr change at the end of the chain we already started. If you put it _after_ our allP selections, the changes will not apply.**

	p1.style("font-size","22px").style("padding","20px").attr("class","blue-selection");

If you refresh the page, you'll see the styles change. You can also inspect your div to see the class change.

**At their core, selections are arrays of DOM elements.**

You can also append new elements to your selections. Let's add a `<p>` to each of our `.selections` divs using the `append` method.

	allP.append("p")
		.attr("class","inner-paragraph")
		.text("Our new paragraph");

Here's what this code is doing:
1. Selects all the `.selection` divs.
2. Appends a `<p>` DOM element to each `.selection` div.
3. For each of these new `<p>` elements, we're giving it the class `.inner-paragraph` and making the text inside the `<p>` say "Our new paragraph".

If you refresh your page, you'll see a new paragraph, using the styles already set for `.inner-paragraph` in our css file.

But one of the nice parts of D3 is being able to visualize stuff with SVG, so let's do some D3 selections using SVG elements. All of our SVG elements need to be inside an `svg` DOM element, so let's add one of those to the page using our selection skills. There should already be a `#svg` div in your `index.html` file so we'll append it there.

	var svg = d3.select('#svg').append('svg')

For our SVG to show up, it needs a height and width attribute attached, so chain those on the end of your selection.

	var svg = d3.select('#svg').append('svg')
		.attr('width','500')
		.attr('height','500');

And the same way we'd add divs or paragraphs to our page, lets add a circle to our SVG. All the attributes used in the code below are necessary to make our shape show up.

	svg.append('circle')
		.attr('cx', 250) // the x coordinate position of the circle
		.attr('cy', 250) // the y coordinate position of the circle
		.attr('r','100') // the radius of the circle
		.style('fill','blue') // svg elements use "fill" and "stroke" instead of background color, color or border

Let's add a rectangle as well.

	svg.append('rect')
		.attr('x', '250') // the x coordinate position of the top left corner of the rectangle
		.attr('y', '250') // the y coordinate position of the top left corner of the rectangle
		.attr('width','150') // the width
		.attr('height','75') // the height
		.style('fill','red')

Different shapes require different attributes. For example: `line` elements need coordinates for their starting points and their end points: x1, x2, y1, and y2.


Read more about how selections work → [https://bost.ocks.org/mike/selection/](https://bost.ocks.org/mike/selection/)

#### Data to DOM: using `enter` and `exit` for data joins

Now that we know how to append DOM elements and make changes to said DOM elements on our page, let's take a look at how the *data* part of D3 works. But first we need some data. Let's write out a basic array of values to work with.

	var circleData = [50,100,230,415];

Let's say we want to see a circle for each number in our array. To do this, we need to *join* our data to our DOM elements we're going to append. To do this, we'll use D3's *enter, update and exit* methods.

*`.enter()`* creates the initial join of data to DOM element. Assigns a DOM element for every data point we pass in.
*`.exit()`* removes unused elements, or _exits_ the elements that no longer have data associated with them.

For this class, we will be focusing on using `.enter()` because we won't be making anything that will involve updating data, but there are resources at the end of this section for further reading and explanation.

So we could just have a set of circles positioned according to our array using the array methods we already know about, like indices and loops. It would look something like this:

	for (var i = 0; i < circleData.length; i++){
		svg.append('circle')
			.attr('class','data-circle')
			.attr('cx', circleData[i])
			.attr('cy', '30')
			.attr('r','20')
	}

But D3 selections let us do this using a shortened command that actually _joins_ the data to our elements. Put the following code in your main.js file:

	var circles = svg.selectAll('.data-circle') // tells d3 we're going to be working with a set of elements with the class .data-circle
		.data(circleData).enter() // passes in our circleData array, and then uses .enter() to join the data with the .data-circle elements we just told d3 we were going to create
		.append('circle').attr('class','data-circle') // appends circles in reference to the data, and assigns them the class we told d3 we'd be using for our elements

If you refresh your page, you wont see anything. But if you're curious you can `console.log(circles)` to take a look at what we just appended to the DOM.

For our circles to show up, like we learned earlier, they need coordinate positions and a radius. To do this, we can use a *function* to pull the data from each element like this:

	var circles = svg.selectAll('.data-circle') 
		.data(circleData).enter()
		.append('circle').attr('class','data-circle')
			.attr('cx', function(d){
				return d // return the value of the array at this point in the data/at this point in our selection
			})
			.attr('cy','30')
			.attr('r','20');

Now, if you refresh your page, you should see four circles, and each circle should be positioned along the X axis according to its corresponding number in the array.

For more on data joins in D3:
[https://bost.ocks.org/mike/join/](https://bost.ocks.org/mike/join/)
[https://medium.com/@c_behrens/enter-update-exit-6cafc6014c36](https://medium.com/@c_behrens/enter-update-exit-6cafc6014c36)
[https://bl.ocks.org/mbostock/3808218](https://bl.ocks.org/mbostock/3808218)

#### Scales

One of the great utilities D3 provides for manipulating data for visual representation can be found in D3's *scales*. From the documentation:

>Scales are a convenient abstraction for a fundamental task in visualization: mapping a dimension of abstract data to a visual representation.

TL;DR Scales let you align your data to fit your visual space. This is extremely helpful when trying to visualize your data in proportion to the visual space you provide.

There are multiple kinds of D3 scales to work with, but we'll first look at *linear* scales. Let's grab that array of pet data we used last class and set up a scale to help us visualize it inside an SVG that's 300px by 150px. Add this to your `main.js` file:

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

To test out our `ageScale`, let's pass in one of our `pets`!

	console.log( ageScale(pets[0].Age) );

You should see a `100` printed in your console. Looking at our data, we know that 0-200 is the _range_ of our visual field (being our SVG), and 0-6 is the _domain_ of our possible input values, which would make an age of 3 (Princess Mia's age) equal to 100. It's all about making our visual an actual _to scale_ representation of our data!

You can also set up categorical scales in D3 – these are called *ordinal scales*. From the docs:

>Unlike continuous scales, ordinal scales have a discrete domain and range. For example, an ordinal scale might map a set of named categories to a set of colors, or determine the horizontal positions of columns in a column chart.

Let's say we want to make a bar chart of pet ages, with a bar for each pet. To set up this bar chart, we'd need a `rect` for each pet, and each `rect` needs X and Y coordinates. We already have one of our coordinate positions – from our linear scale we set up above – but now we need to know where each bar needs to be positioned. We can use an ordinal scale to determine where the bars should be positioned. Add the following to your code:

	var petScale = d3.scaleBand()
		.domain(pets.map(function(d) { return d.Name; })) 
		.range([0, svgHeight], .1); //setting range from 0 to height, like our svg. scaleBand() scales are good for positioning bars

If you want to test it out, you can pass in one of our pets to the `petScale` and `console.log()` it.

	console.log(petScale(pets[1]));


Further reading on D3 scales:
- [https://github.com/d3/d3-scale](https://github.com/d3/d3-scale)
- [https://github.com/d3/d3-array](https://github.com/d3/d3-array)


### MAKING A CHART

Now that we understand all the basic pieces and parts that put together a D3 visualization, let's make a chart of our `pets` data! We've already set up our SVG inside the `petSVG` variable, we can use our selections skills to create some bars to visualize our pets and their ages. We'll make this a horizontal bar chart:

	var bars = petSVG.selectAll('.pet-bar')
		.data(pets).enter()
		.append('rect').attr('class','pet-bar')
		.attr('x','0') // our X coordinate for each bar will be 0, because the top left of our rectangle needs to be all the way to the left
		.attr('y', function(d){
			return petScale(d.Name) //we pass in our pet's name to the petScale to get its y position
		})
		.attr('height', petScale.bandWidth() ) // scaleBand comes with a nice bandWith() method for creating bars
		.attr('width', function(d){
			return ageScale(d.Age) //we pass in our pet's age to the ageScale to see how wide the bar should be
		});


#### IF WE HAVE TIME...adding axes

TK TK TK TK TK TK


#### Other useful D3 methods

TK TK TK TK TK TK



