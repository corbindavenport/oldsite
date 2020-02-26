function toggleVisible(el) {
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }
}


document.getElementById('nav-btn').addEventListener('click', function() {
    toggleVisible(document.getElementById('nav-links'));
    if (this.getAttribute('aria-expanded') === 'false') {
        this.setAttribute('aria-expanded', 'true');
    } else {
        this.setAttribute('aria-expanded', 'false');
    }
})