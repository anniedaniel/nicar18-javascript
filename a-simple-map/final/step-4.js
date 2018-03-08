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



// using Queue to load the external json and csv files

//We're going to combine both trace and paint into one colored map.
//First, we use queue to speed up and simplify the process of loading map and data.
//We tell it to run our function after they're ready.
https: //unpkg.com/us-atlas@1.0.2/us/10m.json
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