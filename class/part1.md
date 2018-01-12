# JavaScript part 1: Fundamentals and syntax

## What is JavaScript?

Javascript is one of the 3 fundamentals of web development:

- HTML structures websites, or the DOM
- CSS styles the DOM
- JavaScript programs the behavior of the DOM

DOM stands for Document Object Model. Basically, it's the website you're looking at.

First thing's first, go to your finder and double-click on the `index.html` file. It should open up into your web browser.

Next, right click on your web browser and select `Inspect`. This will open your web console. Web consoles are super handy for debugging (it'll tell you exactly what and where your code went wrong) and you can even run JavaScript methods in there.


## Let's do this!

JavaScript talks to HTML pages from within `<script>` tags at the bottom of an HTML file or form it's own special `.js` file. Copy and paste this line into your `main.js` file:

```
document.getElementById('hello').innerHTML = 'Hello JavaScript';
```

Now refresh your web browser. What happened?

The `document` object is the HTML web page, so the first thing this line does is grabs the `document`. Next, the `getElementById()` method tells the `document` to grab whatever has that ID in the parentheses. Once it gets the element with the specified ID, we tell it to grab the `innerHTML` and change it to something else. In this case, `Hello JavaScript`. 

Open up your `index.html` file. You'll see that there is a `<div id="hello"></div>`. Let's find this in our web console. In the top left corner of the console, you'll see a box with a curser on it. Click that.

Move your cursor around the page- you'll notice that different elements highlight. Find the `<div id="hello"></div>` on the page. You'll notice that there's now a `Hello JavaScript` in there. 

## Cool, but aren't we here to make charts?

Yes! Let's talk about data. 

### Variables

Variables store data. For instance, let's say you have a list of numbers:

```
[1, 2, 3, 4, 5]
```

In JavaScript, a list of items like this wrapped in square brackets is called an array. Let's say you want to add that to your HTML like we did earlier when we added `Hello JavaScript` to our page. You could say:

```
document.getElementById('hello').innerHTML = '[1, 2, 3, 4, 5]';
```

Or we could say:

```
var ourData = [1, 2, 3, 4, 5]
document.getElementById('hello').innerHTML = ourData;
```

This is better for lots of reasons. For one, what if we need to use that list of numbers again? In the first example, we'd have to copy and paste that same list into whatever we needed it for. 





