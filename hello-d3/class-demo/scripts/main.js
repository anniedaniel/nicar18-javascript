
// make sure we've loaded d3 properly, check out all the functions inside
console.log(d3);

////////////////////
/////SELECTIONS/////
////////////////////

/* you can select things individually */

var p1 = d3.select("#p1");
p1.style("font-size","22px");

/* select all of the divs with class "selections" and change the font color*/
var allP = d3.selectAll(".selections");
allP.style("background", "pink");


