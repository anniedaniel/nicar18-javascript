
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