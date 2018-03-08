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

//Now, we get the stencil. Before we can add data, we need to add the shapes it's gonna be connected to. For that, we use a topoJSON.
//d3 has a ready-made function to read in json data, and even has a pre-built state map for us. We just need to read it in and then tell d3 to run the function to handle it.
d3.json("https://d3js.org/us-10m.v1.json", json_function)

//This function will create the map without any added data. It takes two objects: The error case if the json doesn't read, and the json itself if it does.
function json_function(error, us) {
    //Let's see if it worked. If this runs properly, it should return a list of the states and their shape parameters.
    console.log(us.objects.states)
    if (error) throw error;
    //We again tell d3 to manipulate the svg to draw the map. In this one, we tell it to
    //add on another group of shapes (the states),
    //give it a class of "states",
    //Select the path (shape) of the shapes, 
    //give those paths data from the features of our json,
    //add on those paths,
    //and give those paths the geo parameter we created earlier.
    svg.append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path);

    //Now, we use d3's built-in "mesh" function to create the borders of the states, so that we don't end up with one big US blob. 
    //We add on a new path (the borders),
    //Give them the css class we define,
    //and point it to where to look. The function here tells d3 not to repeat border drawings so we don't get double borders.
    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) {
            return a !== b;
        })));
};


