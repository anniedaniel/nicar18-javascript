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

D3 has its own shorthand for selecting DOM elements – and they're called **selections**!

Navigate to your `scripts/` directory and open up the `main.js` file in your text editor. Add this line to select the `#p1` div using D3 selections.

	d3.select("#p1");

While we're at it, let's assign this to a variable so we can reference it later on (remember variables from last class?).

	var p1 = d3.select('#p1');





Read more about how selections work → [https://bost.ocks.org/mike/selection/](https://bost.ocks.org/mike/selection/)


#### Scales


#### Other useful D3 methods


### Making a simple chart






