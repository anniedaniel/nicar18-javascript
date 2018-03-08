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


//Part Two, Explain how D3 reads csv
//Out comes the paint. Here, we read in the csv with d3's built-in function and tell it to run our function

d3.csv("poverty_data.csv", ready)

//Let's test it to see how it reads that data.
function ready(data) {
    //Check your console: The csv has been returned as a json.
    console.log(data);
    //Now, we tell d3 to select paragraphs,
    //grab the data and add it to p,
    //And generate text for each data point (d) with a function.
    d3.select("body").selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text(function(d) {
            //A note on data in d3 -- since "d" refers to one row in the csv or one line in the json, 
            //We use the column names and Javascript's bracket notation to access each column for that row.
            //Then we write it out by combining strings with the data into one big paragraph.
            return 'State: ' + d['GEO.display-label'] + ' (id: ' + d['GEO.id2'] + ') has a poverty rate of ' + d['HC03_EST_VC01'] + '%';
        });
}


// Part Three using Queue to load the external json and csv files

//We're going to combine both trace and paint into one colored map.
//First, we use queue to speed up and simplify the process of loading map and data.
//We tell it to run our function after they're ready.
//https: //unpkg.com/us-atlas@1.0.2/us/10m.json
    queue()
    .defer(d3.json, "us.json")
    .defer(d3.csv, "poverty_data.csv")
    .await(makemap);


function makemap(error, us, data) {
    //In case there's an error.
    if (error) throw error;

    //Here are the quantitative variables that we need to read to create the map. First, we create empty variables that we're going to fill with our data.
    var poverty_pct = {};
    var poverty_num = {};

    //Now, for each row in the data, we define our variables, telling d3 which columns to look for. The + sign indicates that they need to be converted into numbers, rather than strings. 
    data.forEach(function(d) {
        poverty_pct[d["GEO.id2"]] = +d.HC03_EST_VC01;
        poverty_num[d["GEO.id2"]] = +d.HC02_EST_VC01;
    });

    //Next, we pick out paint colors. We first tell d3 what numbers to look for when creating stops...
    var color_domain = [5, 10, 15, 20, 25, 30]
    //Then we tell it what colors to output based on those stops.
    var color_scale = d3.scaleThreshold()
        .domain(color_domain)
        .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);

    //We start with the same stenciling in that we did above
    svg.append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", function(d) {
            //But we add in another feature: Painting in the map with the colors we picked before and using the data columns we already defined.
            return color_scale(poverty_pct[d.id]);
        })
        .style("opacity", 0.8)
    //We can also style the feature by, say, giving the features transparency.

    //The same code as before, to create borders.
    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) {
            return a !== b;
        })));

    console.log("We did it!")
}

//For more (tooltips, sliders, and points): http://duspviz.mit.edu/d3-workshop/mapping-data-with-d3/
