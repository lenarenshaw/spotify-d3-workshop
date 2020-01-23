const CLIENT_ID = 'c3afef0eb47f4ac1b54ec99fd373fbc5'
const CLIENT_SECRET = '7424d153e69746baa5532853207b1d40'
const ACCESS_TOKEN = 'BQCqXkC5YvH8rxTkzEWvKRZrv7RjKcat1IZ5ErsrDRRqftU5XqK4COE2jvrQ54_oXeDhZriPWAUeL-Nx1noHyhZ-7XTOAC0Htr8C_b7KdJqSkFw9BRFQOXYmCR6u_dgDBON3x-lQDE2PwT8cyNHJzfCe'

async function getAndVisualizeSpotifyData(){
    $.ajax({
        url:"" // TODO: find URL for top tracks 
        ,
        headers: {
            // TODO: add header token
        },
        success: function(response) {
            // https://bl.ocks.org/alokkshukla/3d6be4be0ef9f6977ec6718b2916d168
            // 1. get dataset from response.            
            // 2. Create variables for later use: diameter (integer), color (function)
            // color is a function mapping ints to colors
            // 3. Create an empty svg object in the body of the html with specified width, height, and class.
            // 4. Use d3.hierarchy to create a treelike structure with the radius for each datapoint's circle
            // 5. Use d3.pack to create nested circles (won't be displayed yet)
            // d3.pack is used to create nested circles. When there's no nesting and only children on same level, creates a bubble chart.
            // see https://d3-wiki.readthedocs.io/zh_CN/master/Pack-Layout/
            // 6. add a node class (object of type g) for each data, and set its location using an attribute with "transform".
            // 7. add the circles with colors
            // 8. add the name as text
            // 9. add the popularity as text
            return dataset;
        }
    });
}

getAndVisualizeSpotifyData();
