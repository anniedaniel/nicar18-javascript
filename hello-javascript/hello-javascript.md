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


### Loops

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
		"Age": 6,
		"Color": "brown",
	},

]

pets.forEach(function(object) { 
	console.log(object.Name); 
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
		"Age": 6,
		"Color": "brown",
	},

]


pets.forEach(function(obj) { 
	console.log(obj); 
});
```

In your `index.html` file, paste this code above the `</body>` tag:

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

Paste this code into your `script.js` below our for loop:

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

This doen't look like a ton of code, but trust me, it's doing *a lot*. Save and refresh your page. You should see a table there with all of the pets. Let's walk through what happened.

First, we start with our for loop cycling through all of our pet objects. Next, we create another variable `tableRow`. This creates a new row for our table for every pet object (3 rows). 

Then we have *another* for loop. This loop cycles through each of the *attributes* within the object and creates a tableCell variable for each attribute to live. Finally, it adds everything to the page with that `innerHTML` method.


### Bonus round

Let's dig in a little deeper to see exactly what just happened. Let's start by talking about that new `i` that showed up in the second function. 

`console.log()` is a JavaScript programmer's best friend. You can put pretty much anything between those parentheses and it'll print in the console. This is super helpful when you're not exactly sure what your code is doing, like that new `i`. Let's log the `i` right above where we create our `tableCell` variable:

```js
console.log(i)
```

Check out your console we opened up at the beginning and you should see something that looks like this

```js
0
1
2
3
```

This is called an `index`. It's a term frequently used in programming that indicates an element's place in a series. Since `Color` is last in the series, it has an index of 3. In JavaScript, indexes always start at 0.

In for loops, indexes track which element to perform the operation on. We see this at the very end with this line:

```js
tableCell.innerHTML = obj[i];
```

This grabs the table cell we created just above (`tableCell.`), and then gives it the attribute of wherever it is in the loop to display on the page (`obj[i]`).


### Notes

[https://github.com/scottpham/JS2WorkshopNICAR2016](Intro to JavaScript and jQuery from NICAR 2016)
[https://www.w3schools.com/js/js_intro.asp](w3schools intro to JavaScript)
[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash](Mozilla's intro to JavaScript)
[https://www.tutorialspoint.com/javascript/index.htm](Another JavaScript tutorial)
[https://www.w3schools.com/js/js_loop_for.asp](More about for loops)