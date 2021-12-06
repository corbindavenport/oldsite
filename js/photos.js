// This is a workaround for links on photos not working with PixelFed's RSS feeds

document.querySelectorAll('.feedburnerFeedBlock img').forEach(function (el) {
    var url = el.parentNode.parentNode.querySelector('a').href
    // Create link element
    var link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('target', '_blank')
    link.append(el.cloneNode())
    el.parentNode.replaceChild(link, el)
})