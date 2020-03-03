var footballPitch = document.getElementById('body');
var player = document.getElementById('player');

footballPitch.addEventListener("click", function (event) {
    player.style.left = event.clientX + 'px';
    player.style.top = event.clientY + 'px';
})