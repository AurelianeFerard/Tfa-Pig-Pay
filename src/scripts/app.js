"use strict";
// playbutton
let playButton = document.querySelector(".control--play");
playButton.addEventListener("click", (e) => {
    // On récupère le parent avec la classe divPlayer
    let control = e.currentTarget;
    let divPlayer = control.closest(".divPlayer");
    let videoElement = divPlayer.querySelector("video");
    play(videoElement.id, control);
});

// Progress bar
let videoElement = document.querySelector("video");
videoElement.addEventListener("timeupdate", (e) => {
    update(e.currentTarget);
});


function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);

    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();
        control.textContent = 'Play';
    }
}

function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}

function update(player) {
    var duration = player.duration;
    var time     = player.currentTime;
    var fraction = time / duration;
    var percent  = Math.ceil(fraction * 100);

    var progress = document.querySelector('#progressBar');

    progress.style.width = percent + '%';
    progress.textContent = percent + '%';
}
