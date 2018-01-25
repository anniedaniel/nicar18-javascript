# JavaScript part 1: Fundamentals and syntax 

This is the first of 3 classes where we'll walk through the fundamentals and syntax of JavaScript. This class assumes you have a basic understanding of HTML and CSS, but mostly we'll be focusing on the JavaScript part of web development.

Everything you need for this class is in the `class` folder in this directory. If you get lost or would rather just listen, completed code and documentation can be found in the `final` folder.

Quick preface, Javascript isn't something you can learn in an hour. This tutorial will hurl a lot of information at you, but hopefully it will serve as a good starting point to get familiar with what you can do and how it works. I *highly* recommend that you go back and dig into some of the tutorials and notes listed at the bottom to get a slightly better footing in JavaScript than a quick hour rundown.

If you get lost, don't panic! Ask questions, but it's also totally cool to sit back, follow along and sort out your code later.

## What is JavaScript?

Javascript is one of the 3 fundamentals of web development:

- HTML structures websites, or the DOM
- CSS styles the DOM
- JavaScript programs the behavior of the DOM

The DOM stands for Document Object Model, and you'll hear it all the time in web development. It gets more complicated, but basically it's the HTML of the website you're looking at. JavaScript (not to be confused with Java) is a scripting language that manipulates the DOM. This'll make more sense a little later.

## Let's get started

First thing's first, go to your finder and open up the `class` folder. double-click on the `index.html` file. It should open up into your web browser.

Next, right click on your web browser and select `Inspect`. This will open your web console. Web consoles are super handy for debugging (it'll tell you exactly what and where your code went wrong) and you can even run JavaScript methods in there.


JavaScript talks to HTML pages from within `<script>` tags at the bottom of an HTML file or form it's own special `.js` file. Copy and paste this line into your `main.js` file:

```js
document.getElementById('hello').innerHTML = 'Table of pets';
```

Now refresh your web browser. What happened?

The `document` object is the HTML web page, so the first thing this line does is grabs the `document`. Next, the `getElementById()` method tells the `document` to grab whatever has that ID in the parentheses. Once it gets the element with the specified ID, we tell it to grab the `innerHTML` and change it to something else. In this case, `Table of pets`. 

Open up your `index.html` file. You'll see that there is a `<div id="hello"></div>`. Let's find this in our web console. In the top left corner of the console, you'll see a box with a curser on it. Click that.

Move your cursor around the page- you'll notice that different elements highlight. Find the `<div id="hello"></div>` on the page. You'll notice that there's now a `Table of pets` in there. 

## Cool, but aren't we here to make charts?

Yes! Let's talk about data. 

### Variables

Variables store data. For instance, let's say you have a list of numbers:

```js
[1, 2, 3, 4, 5]
```

In JavaScript, a list of items like this wrapped in square brackets is called an array. Let's say you want to add that to your HTML like we did earlier when we added `Hello JavaScript` to our page. You could say:

```js
document.getElementById('hello').innerHTML = '[1, 2, 3, 4, 5]';
```

Or we could say:

```js
var ourData = [1, 2, 3, 4, 5]
document.getElementById('hello').innerHTML = ourData;
```

This is better for lots of reasons. For one, what if we need to use that list of numbers again? In the first example, we'd have to copy and paste that same list into whatever we needed it for. And what if we wanted to conduct some operations on those numbers like multiply them or display them on the page in any format other than `[1, 2, 3, 4, 5]`?

### A note on data...

Typically you'll need to use some sort of computer readable datatype when you're using JavaScript to handle your data. These include CSV (Comma Separated Values), JSON (JavaScript Object Notation), XML (eXtensable Markup Language) and more.

#### But what about excel?

Excel is a crazy complex proprietary format that JavaScript hasn't quite figured out yet. Your best bet is to stick with relatively simple data types like CSV which is just comma separated values or JSON which was created specifically for JavaScript.

### What the heck is JSON

JSON, pronounced jay-son, is a type of data file. Not unlike excel or CSV, it is a syntax for storing and exchanging data. It is made up of JavaScript objects which look like this:

```js
{
	"Name": "Princess Mia",
	"Type": "cat",
	"Age": 3,
	"Color": "orange",
}
```

Objects are wrapped in curly brackets and if we converted this into a table or spreadsheet, it would look like this:

```sh
| Name         | Type  | Age  | Color   |
|----------------------------------------
| Princess Mia | cat   | 3    | orange  |
| Willy        | cat   | 6    | grey    |              
| Sophie       | dog   | 4    | brown   |
```

Just like spreadsheets, objects have attributes. In this case, our attributes our Name, Type, Age and Color. Those attributes will be the same for all of our objects, meaning that all of the pets will have a name, type, age and color.


### For loops

Copy the following and paste it into your `script.js`

```js
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

]

pets.forEach(function(obj) { 
	console.log(obj.Name); 
});
```

Save it, refresh your browser, and take a look at the console. What happened?

First, we created a JSON variable `pets` with all of our pet objects. Next, we've written a loop. A for loop executes a block of code over and over again. Here, we're using a for loop to cycle through our data and log the names in the console. 

`console.log()` is a JavaScript programmer's best friend. You can put pretty much anything between those parentheses and it'll print in the console. This is super helpful when you're not exactly sure what your code is doing. For instance, what does that `obj` in the `function(obj)` mean? Let's log it!

Swap out the `obj.Name` in the parenthesis for `obj` then save and refresh your browser.

### Put it all together

So far we've learned what JavaScript and the DOM are, variables, objects and loops. This is an extremely narrow snippet of what JavaScript can do, but these are basic concepts that you'll use all the time as you dive deeper into programming. 

To get you ready for the next couple of classes in this series, we're going to write a loop that cycles through our data, and arranges it into a table on the page.

Just so we're all on the same page, this is what your JavaScript file should look like now:

```js
document.getElementById('hello').innerHTML = 'Hello JavaScript';

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

]


pets.forEach(function(obj) { 
	console.log(obj); 
});
```

In your `index.html` file, paste this code just underneath `<div id="hello"></div>`:

```html
<table>
	<tr>
		<thead>Name</thead>
		<thead>Type</thead>
		<thead>Age</thead>
		<thead>Color</thead>
	</tr>
	<tbody class="pet-table">
	</tbody>
</table>
```

Save and refresh your browser. You should see some table headers on your page.

Next, paste this code into your `script.js`:

```js
table = document.getElementById('pet-table')

pets.forEach(function(obj) { 
	var tableRow = table.insertRow(-1);
	for(i in obj){
		var tableCell = tableRow.insertCell(-1);
		tableCell.innerHTML = obj[i];
	}
});
```

This doen't look like a ton of code, but trust me, it's doing *a lot*. Save and refresh your page. You should see a table there with all of the pets. Let's walk through what happened step-by-step.

First, we create a table variable. This is so we can talk to it later when we want to add our pets to it.

```js
table = document.getElementById('pet-table')
```

Next, we start our for loop. You'll notice that this looks different than the for loop we used earlier. There are probably 10 different ways to write a for loop in JavaScript and this is another one of my favorites because it's very explicit about what it's doing. For each object in our object list, perform this function or code block. We'll talk more on functions in a bit- for now just know that functions are blocks of code that perform a task.

```js
pets.forEach(function(obj) { 
```
Then we create another variable `tableRow`. This creates a new line for each pet.

```js
var tableRow = table.insertRow(-1);
```

Geeze louise, another for loop *within* a for loop?! You betcha another for loop! This time we're looping through the attributes within our pet object. So the first time this loop runs it's grabbing the name, the second time it's grabbing the type, next the age and finally the color.

```js
for(i in obj){
```

For all of the pet attributes we're looping through, we make another variable for the table cells where our pet data points will live. This line of code tells the DOM to find where we made our table row in the first loop a couple of steps back, and to insert a new table cell. 

That `(-1)` is just special to this particular `insertCell()` method and means that we want the table cell to be added to the end. This is something I'd never seen before and had to google. We're learning together!

```js
var tableCell = tableRow.insertCell(-1);
```

This is where we tell our table what exactly we want to add. First, we tell the DOM to grab the `tableCell` we created a second ago. Next, that `innerHTML` preps it for whatever text or HTML snippet we wnant to stick in there. In this case, we want to add the data in our object. Now for a little bit of JavaScript magic. We get this data by getting the object we're looping and telling it to grab the data inside with `[i]`. Square brackets next to an object is a JavaScript convention that indicates we want to break into that object and grab the data inside.

```js
tableCell.innerHTML = obj[i];
```

### Bonus round! Functions

A function in JavaScript is a block of code that performs a task. A function won't happens unless we "call" it.

#### But that's weird, why wouldn't I just write the code I want to happen when I want it to happen?

There's a concept in programming called DRY which stands for Don't Repeat Yourself. Functions allow us to write reusable blocks of code that we can use later rather than writing them out over and over again. For instance, what if we had two data sets we needed to create tables for?

Copy and paste this new `plants` variable just underneath our `pets` variable.

```js
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
```
First thing, let's get our `index.html` file ready for a new table. Paste this just below our first table:

```html
<table>
	<tr>
		<th>Name</th>
		<th>Color</th>
		<th>Description</th>
	</tr>
	<tbody id="plant-table">
	</tbody>
</table>
```

That sets up a new table with correct headers and a `<tbody>` with an ID of `plant-table` so our code knows what to look for.

#### Your first function

We're going to transform our table making code into something we can use for whatever data we have. Swap out this code that we wrote earlier in our `script.js`:

```js
table = document.getElementById('pet-table')

pets.forEach(function(obj) { 
	var tableRow = table.insertRow(-1);
	for(i in obj){
		var tableCell = tableRow.insertCell(-1);
		tableCell.innerHTML = obj[i];
	}
});
```

for this new code:

```js
function tableMaker(id, data) {
	table = document.getElementById(id)

	data.forEach(function(obj) { 
		var tableRow = table.insertRow(-1);
		for(i in obj){
			var tableCell = tableRow.insertCell(-1);
			tableCell.innerHTML = obj[i];
		}
	});
}
```

Then, at the very bottom, we'll call our function. First for pets, then for plants

```js
tableMaker('pet-table', pets);
tableMaker('plant-table', plants);
```

Save, and look at your browser. Refresh your `index.html`. Did it work?

### Wait, what just happened?

Let's walk through line-by-line.

#### Functions, parentheses and parameters, oh my 😬:

```js
function tableMaker(id, data) {
```

This first step is probably the most important part. It establishes that we're about to write a function, names the function (in this case, `tableMaker`) and tells the function what information to expect. We call whatever we put in the parentheses parameters. Before, when our code looked like this:

```js
table = document.getElementById('pet-table')

pets.forEach(function(obj) { 
	var tableRow = table.insertRow(-1);
	for(i in obj){
		var tableCell = tableRow.insertCell(-1);
		tableCell.innerHTML = obj[i];
	}
});
```

We told it exactly what to expect. We told it to grab `pet-table` and that we'd be looping through our `pets` data. Now that our code looks like this:

```js
function tableMaker(id, data) {
	table = document.getElementById(id)

	data.forEach(function(obj) { 
		var tableRow = table.insertRow(-1);
		for(i in obj){
			var tableCell = tableRow.insertCell(-1);
			tableCell.innerHTML = obj[i];
		}
	});
}
```
We've swapped our `pets` and `pet-table` for more generic `id` and `data` parameters that we can change later when we call the function.

For the most part, the rest of this code block looks a lot like we just walked through when we built our first table. The only things that changed were the ID we target and the data we cycle through. See? Not so bad!

Last thing, we have to call our function! In order for functions to happen, something has to tell it to run which is what we do at the bottom of our `script.js` file with:

```js
tableMaker('pet-table', pets);
tableMaker('plant-table', plants);
```
Here, we tell our tableMaker to run and to fill in those `id` and `data` parameters with the ID we want to target and the data we want to use. 

One weird thing to note, you'll see that `pet-table` and `plant-table` are wrapped in quotes. That's because they're strings, meaning they're just words we're looking for. `pets` and `plants` are not wrapped in quotes because they're variables. They represent the big chunk of JSON we grabbed earlier.

### We did it!

We did a ton in this class. If you feel overwhelmed, that's totally okay. Here are some of the things we went over:

- What is JavaScript?
- The DOM
- The web console
- Arrays
- Variables
- JSON
- Objects
- For loops
- console.log()
- Functions

These are the fundamentals of JavaScript, and now that you have a little familiarity with them- you're ready to start adding on to your programming toolkit.

🎉

### Notes

[Intro to JavaScript and jQuery from NICAR 2016](https://github.com/scottpham/JS2WorkshopNICAR2016)
[w3schools intro to JavaScript](https://www.w3schools.com/js/js_intro.asp)
[Mozilla's intro to JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
[Another JavaScript tutorial](https://www.tutorialspoint.com/javascript/index.htm)
[More about for loops](https://www.w3schools.com/js/js_loop_for.asp)