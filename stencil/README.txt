This is README for stencil code.

To set up your Spotify data in place of Lena's, follow these steps:
  1. Create a Spotify account if you don’t already have one.
  2. Go to https://developer.spotify.com/dashboard to create and register a new application.
Copy the Client ID and Secret Client ID into the variables at the top of the bubblechart.js file.
  3. Access your Access Token. This requires three modes of authentication. The easiest
way to do this is to follow the instructions on the Spotify website:
https://developer.spotify.com/documentation/web-api/quick-start/. Then, go to the documentation
for the request you want to use (https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/),
set type to "tracks", click "get token", and log in. This will ensure your token can be used for this function.
Paste this token into the bubblechart.js file.

Other helpful links:
- Spotify API Documentation: https://developer.spotify.com/documentation/web-api/
- Spotify API Endpoint reference (beta): https://developer.spotify.com/documentation/web-api/
  or https://developer.spotify.com/documentation/web-api/reference/albums/

For more robust projects, the Spotify API can become super technical and convoluted.
We recommend you use a wrapper for the API functions that has already been created in order
to minimize the work you have to do creating these requests. The ones we recommend are:
- Java: https://github.com/thelinmichael/spotify-web-api-java
- Javascript: https://github.com/jmperez/spotify-web-api-js
- Python: https://github.com/plamere/spotipy

The wrappers and useful example code that Spotify recommends can be found here:
https://developer.spotify.com/documentation/web-api/libraries/
