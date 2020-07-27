// Documentation: https://dev.twitch.tv/docs/api/reference#get-streams
// Testing me: https://api.twitch.tv/helix/streams?user_id=37983012
// Testing another channel: https://api.twitch.tv/helix/streams?channel_name=twitchrivals

// To regenerate token: curl -d "client_id=clientGoesHere&client_secret=secretGoesHere&grant_type=client_credentials&scope=user:read:broadcast" -X POST https://id.twitch.tv/oauth2/token

fetch('https://api.twitch.tv/helix/streams?user_id=37983012', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Client-ID': 'k6gm43qchk3j4swweo3bj95ky4h9mb',
		'Authorization': 'Bearer df7m64njo8pkuvf96uqp8fdqmcbijv'
    }
}).then(function (response) {
    response.json().then(function (data) {
        if (data.data.length === 0) {
            console.log('Not live on Twitch.')
        } else {
            // Add Twitch player
            var container = document.createElement('div')
            container.classList.add('twitch-container')
            var player = document.createElement('embed')
            player.setAttribute('src', 'https://player.twitch.tv/?allowfullscreen&playsinline&channel=corbindavenport')
            player.setAttribute('allowfullscreen', true)
            container.appendChild(player)
            document.querySelector('div[class="content"]').prepend(container)
            // Add classes to main element
            document.querySelector('div[class="content"]').classList.add('twitch-page')
        }
    })
})
