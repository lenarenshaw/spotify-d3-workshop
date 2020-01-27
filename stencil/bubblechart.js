// Tokens and keys necessary for getting Spotify data. See the README for how to replace these with your values.
const CLIENT_ID = 'c3afef0eb47f4ac1b54ec99fd373fbc5'
const CLIENT_SECRET = '7424d153e69746baa5532853207b1d40'
const ACCESS_TOKEN = 'BQBgfufn5KHhLs7DyjmasQnV43ehlk5VbtiBgIMOHhvXPtknZUV5A8JWYpCz6nsuldvFfDasKGm1WYii0SyEV5NGWUwHCwSIYQsArCOkYjnuuHG1hwFlpJzOWrKcJOfFkdtXYlS3cF0ZFe9t-S7E51ND'

async function getAndVisualizeSpotifyData(){
    // Ajax is a jQuery tool used for updating webpages in real time.  It is essentially
    // an extension for JavaScript that makes it more useful. We will use ajax to write
    // a simple GET request, which is used to "get" data from the spotify API endpoint.
    $.ajax({
        url: "https://api.spotify.com/v1/me/top/tracks", // TODO: Replace this with the Spotify API endpoint for getting a user's top tracks.
                 // Feel free to limit these tracks for some max length or other parameters, found in the documentation:
                 // https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
        headers: {"Authorization": "Bearer " + ACCESS_TOKEN}, // TODO: Add header content to request. Reference documentation for fields that are required as well as optional tokens.
                     // Hint: The only required token is "Authorization".
        success: function(response) {
          console.log(response);
            // https://bl.ocks.org/alokkshukla/3d6be4be0ef9f6977ec6718b2916d168
            // 1. get dataset from response.

            // 2. Create variables for later use: diameter (integer), color (function)
            // color is a function mapping ints to colors

            // 3. Create an empty svg object in the body of the html with specified width, height, and class.

            // 4. Use d3.hierarchy to create a treelike structure with the radius for each datapoint's circle.

            // 5. Use d3.pack to create nested circles (won't be displayed yet).
            // When there's no nesting and only children on same level, creates a bubble chart.
            // see https://d3-wiki.readthedocs.io/zh_CN/master/Pack-Layout/

            // 6. Add a node class (object of type g) for each data, and set its location using an attribute with "transform".

            // 7. Add the circles with colors

            // 8. Add the name as text

            // 9. Add the artist as text

            // 10. Add the popularity as text

            return dataset;
        }
    });
}

getAndVisualizeSpotifyData();
