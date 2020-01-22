const CLIENT_ID = 'c3afef0eb47f4ac1b54ec99fd373fbc5'
const CLIENT_SECRET = '7424d153e69746baa5532853207b1d40'
const ACCESS_TOKEN = 'BQDHcCpMM2QZYLoh3EzSF3IVNAfFV1roPd9mphWjd6bFP4M68ea5BgxMamasl8EvjHDdW-m94WeDIq0Jv867xf80otG4TjgenOAAa-jhD79KhzywZ7uvj2kbsZeO2GP8LhNSA0ceF3OZZEDM0n6OLkx0'

$.ajax({
    url: 'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term',
    headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
    },
    success: function(response) {
        console.log(response)
    }
});
