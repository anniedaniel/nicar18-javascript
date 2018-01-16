# JavaScript part 1: Fundamentals and syntax

This is the first of 3 classes where we'll walk through the fundamentals and syntax of JavaScript. This class assumes you have a basic understanding of HTML and CSS, but mostly we'll be focusing on the JavaScript part of web development.

Quick preface, Javascript isn't something you can learn in an hour. This tutorial will hurl a lot of information at you, but hopefully it will serve as a good starting point to get familiar with what you can do and how it works. I *highly* recommend that you go back and dig into some of the tutorials and notes listed at the bottom to get a slightly better footing in JavaScript than a quick hour rundown.

If you get lost, don't panic! Ask questions, but it's also totally cool to sit back, follow along and sort out your code later.

## What is JavaScript?

Javascript is one of the 3 fundamentals of web development:

- HTML structures websites, or the DOM
- CSS styles the DOM
- JavaScript programs the behavior of the DOM

The DOM stands for Document Object Model, and you'll hear it all the time in web development. It gets more complicated, but basically it's the HTML of the website you're looking at. JavaScript (not to be confused with Java) is a scripting language that manipulates the DOM. This'll make more sense a little later.

## Let's get started

First thing's first, go to your finder and double-click on the `index.html` file. It should open up into your web browser.

Next, right click on your web browser and select `Inspect`. This will open your web console. Web consoles are super handy for debugging (it'll tell you exactly what and where your code went wrong) and you can even run JavaScript methods in there.


JavaScript talks to HTML pages from within `<script>` tags at the bottom of an HTML file or form it's own special `.js` file. Copy and paste this line into your `main.js` file:

```js
document.getElementById('hello').innerHTML = 'Apple Counts';
```

Now refresh your web browser. What happened?

The `document` object is the HTML web page, so the first thing this line does is grabs the `document`. Next, the `getElementById()` method tells the `document` to grab whatever has that ID in the parentheses. Once it gets the element with the specified ID, we tell it to grab the `innerHTML` and change it to something else. In this case, `Apple Counts`. 

Open up your `index.html` file. You'll see that there is a `<div id="hello"></div>`. Let's find this in our web console. In the top left corner of the console, you'll see a box with a curser on it. Click that.

Move your cursor around the page- you'll notice that different elements highlight. Find the `<div id="hello"></div>` on the page. You'll notice that there's now a `Apple Counts` in there. 

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

JSON, pronounced jay-son, is basically a type of data file. Not unlike excel or CSV, it is a syntax for storing and exchanging data. It is made up of JavaScript objects which look like this:

```js
{
	"Name": "Princess Mia",
	"Type": "cat",
	"Age": 3,
	"Color": "orange",
}
```

If we converted this into a table or spreadsheet, it would look like this:

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
]
for (i in ourData) {
    console.log(ourData[i])
}
```

Save it, refresh your browser, and take a look at the console. What happened?

First, we created a variable `ourData` with our data in the form of an array. Next, we've written a loop. A for loop executes a block of code over and over again. Here, we're using a for loop to cycle through our array and log the numbers in the console. 

`console.log()` is a JavaScript programmer's best friend. You can put pretty much anything between those parentheses and it'll print in the console. This is super helpful when you're not exactly sure what your code is doing. For instance, what does that `i` in the `for (i in ourData)` mean? Let's log it!

In your loop between the curly brackets, replace `ourData[i]` with just `i`. Save, and refresh your browser. You should see something that looks like this:

```sh
0
1
2
3
4
```

In programming, `i` often stands for `index`. Index is basically the number JavaScript assigns to each item in a list. Indexes always start with 0 in JavaScript. Here, our loop uses the index to know on which item in the list to perform the operation.

### Put it all together

So far we've learned what JavaScript and the DOM are, variables, arrays and loops. This is an extremely narrow snippet of what JavaScript can do, but these are basic concepts that you'll use all the time as you dive deeper into programming. 

To get you ready for the next couple of classes in this series, we're going to write a loop that cycles through our data, and arranges it into a table on the page.

Just so we're all on the same page, this is what your JavaScript file should look like now:

```js
document.getElementById('hello').innerHTML = 'Hello JavaScript';

var ourData = [1, 2, 3, 4, 5]
for (i in ourData) {
    console.log(ourData[i])
}
```




### Notes
[https://github.com/scottpham/JS2WorkshopNICAR2016](Intro to JavaScript and jQuery from NICAR 2016)
[https://www.w3schools.com/js/js_intro.asp](w3schools intro to JavaScript)
[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash](Mozilla's intro to JavaScript)
[https://www.tutorialspoint.com/javascript/index.htm](Another JavaScript tutorial)
[https://www.w3schools.com/js/js_loop_for.asp](More about for loops)