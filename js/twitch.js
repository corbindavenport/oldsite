// Documentation: https://dev.twitch.tv/docs/api/reference#get-streams
// Testing me: https://api.twitch.tv/helix/streams?user_id=37983012
// Testing another channel: https://api.twitch.tv/helix/streams?channel_name=twitchrivals

fetch('https://api.twitch.tv/helix/streams?user_id=37983012', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Client-ID': 'opig3niaq171he7udn4r9t1lrm3xdv'
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