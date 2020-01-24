const CLIENT_ID = 'c3afef0eb47f4ac1b54ec99fd373fbc5'
const CLIENT_SECRET = '7424d153e69746baa5532853207b1d40'
const ACCESS_TOKEN = 'BQDb-kb1-GKI6AwJFTGaPsVE6EpmVbyEroFkc2fOilKoShiG6AX6yB3Blad8Ogi_OQ2g8sJtr2zmUL2gKOM0n-sgSuO0loZ26whTpeQQKR-Ndd2-M3Tso7Q7V5P4eVoIqYTVra0TArr7l9GJeojXq22l'

async function getAndVisualizeSpotifyData(){
    $.ajax({
        url: 'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term',
        headers: {
            'Authorization': 'Bearer ' + ACCESS_TOKEN
        },
        success: function(response) {
            dataset = {"children" : response["items"]};
            // https://bl.ocks.org/alokkshukla/3d6be4be0ef9f6977ec6718b2916d168
            const diameter = 600;

            // color is a function mapping ints to colors
            const color = d3.scaleOrdinal(d3.schemeCategory20);

            // Creates an empty svg object in the body of the html with specified width, height, and class.
            const svg = d3.select("body")
                .append("svg")
                .attr("width", diameter)
                .attr("height", diameter)
                .attr("class", "bubble");

            // Create a weird treelike structure with values for each datapoint?
            const nodes = d3.hierarchy(dataset)
                .sum(function(d) { console.log(d); return d.popularity ** 3; });


            // d3.pack is used to create nested circles. When there's no nesting and only children on same level, creates a bubble chart.
            // see https://d3-wiki.readthedocs.io/zh_CN/master/Pack-Layout/
            const bubble = d3.pack(dataset)
                .size([diameter, diameter])
                .padding(1.5);

            // add a node class (object of type g) for each data
            const node = svg.selectAll(".node") // we can actually use any identifier that's not actually used here?
                .data(bubble(nodes).leaves()) // use .leaves() instead?
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                }); // set the location of the node.

            // add title tags to all the nodes
            node.append("title")
                .text(function(d) {
                    console.log(d);
                    return d.data.name + " by " + d.data.artists[0].name + ": " + d.data.popularity;
                });

            // add the circles with colors
            node.append("circle")
                .attr("r", function(d) {
                    return d.r;
                })
                .style("fill", function(d,i) {
                    return color(i);
                });

            // add the name as text
            node.append("text")
                .attr("dy", "-.5em")
                .style("text-anchor", "middle")
                .text(function(d) {
                    return d.data.name.substring(0, d.r / 2);
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", function(d){
                    return d.r/5;
                })
                .attr("fill", "white");

              // add the name as text
              node.append("text")
                  .attr("dy", ".8em")
                  .style("text-anchor", "middle")
                  .text(function(d) {
                      return d.data.artists[0].name.substring(0, d.r / 2);
                  })
                  .attr("font-family", "sans-serif")
                  .attr("font-size", function(d){
                      return d.r/5;
                  })
                  .attr("fill", "white");

            // add the popularity as text
            node.append("text")
                .attr("dy", "1.9em")
                .style("text-anchor", "middle")
                .text(function(d) {
                    return d.data.popularity;
                })
                .attr("font-family",  "Gill Sans", "Gill Sans MT")
                .attr("font-size", function(d){
                    return d.r/5;
                })
                .attr("fill", "white");

            // minor styling thing
            // d3.select(self.frameElement)
            //     .style("height", diameter + "px");
            return dataset;
        }
    });
}

getAndVisualizeSpotifyData();
