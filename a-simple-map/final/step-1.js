// First step: create the canvas we will paint on with our data. We start by defining the size of that canvas.
var width = 960,
    height = 600;

// Create GeoPath function that uses built-in D3 functionality to turn
// lat/lon coordinates into screen coordinates
var path = d3.geoPath()

//Now, we tell d3 to build that canvas for us in the body of the html document. Using d3's special syntax, we tell it to find the "body", 
//add on an svg, 
//Make that svg the right width and height, 
//add on a "g" or group of shapes,
//and give it the class we define in our css.
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append('g')
    .attr('class', 'map');
