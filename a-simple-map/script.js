var width = 960,
    height = 600;


var path = d3.geoPath() // path generator will convert to SVG paths. This is also where you can change the map projection.

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append('g')
    .attr('class', 'map');



//Part One Explain how D3 generates paths based on TopoJSON

// d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {

//    console.log(us.objects.states)
//   if (error) throw error;

//   svg.append("g")
//       .attr("class", "states")
//     .selectAll("path")
//     .data(topojson.feature(us, us.objects.states).features)
//     .enter().append("path")
//       .attr("d", path);

//   svg.append("path")
//       .attr("class", "state-borders")
//       .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
// });


//Part Two, Explain how D3 reads csv

// function ready(data) {
//   console.log(data);

//   d3.select("body").selectAll("p")
//                     .data(data)
//                     .enter()
//                     .append("p")
//                     .text( function(d) {
//                       return 'State: ' + d['GEO.display-label'] + ' (id: ' + d['GEO.id2'] + ') has a poverty rate of ' + d['HC03_EST_VC01'] + '%';
//                     });
// }

// d3.csv("poverty_data.csv", ready)




// Part Three using Queue to load the external json and csv files

https: //unpkg.com/us-atlas@1.0.2/us/10m.json
    queue()
    .defer(d3.json, "us.json")
    .defer(d3.csv, "poverty_data.csv")
    .await(makemap);


function makemap(error, us, data) {

    if (error) throw error;

    var poverty_pct = {};
    var poverty_num = {};


    // Part 3 explain how to connect the map data to the csv data

    data.forEach(function(d) {

        poverty_pct[d["GEO.id2"]] = +d.HC03_EST_VC01;
        poverty_num[d["GEO.id2"]] = +d.HC02_EST_VC01;




    });


    var color_domain = [5, 10, 15, 20, 25, 30]

    var color_scale = d3.scaleThreshold()
        .domain(color_domain)
        .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);



    svg.append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", function(d) {
            return color_scale(poverty_pct[d.id]);
        })
        .style("opacity", 0.8)



    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) {
            return a !== b;
        })));


}