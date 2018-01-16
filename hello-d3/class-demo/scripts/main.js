
// make sure we've loaded d3 properly, check out all the functions inside
console.log(d3);

////////////////////
/////SELECTIONS/////
////////////////////

/* you can select things individually */
d3.select("#p1").style("font-size","22px");
/* select all of the divs with class "selections" and change the font color*/
d3.selectAll(".selections").style("background", "pink");


